#!/usr/bin/env python3
"""
Update Stats Script for Town & Country Ford Baseball
This script regenerates the JSON files from updated CSV data.
"""

import os
import sys
import subprocess

def main():
    print("🔄 Updating Town & Country Ford Baseball Stats...")
    
    # Check if required files exist
    required_files = [
        'T&CF12games.csv.xlsx'
    ]
    
    missing_files = []
    for file in required_files:
        if not os.path.exists(file):
            missing_files.append(file)
    
    if missing_files:
        print(f"❌ Missing required files: {', '.join(missing_files)}")
        print("Please ensure all CSV/Excel files are in the project root directory.")
        return False
    
    try:
        # Step 1: Generate players.json and player_stats.json from consolidated file
        print("📊 Processing consolidated data...")
        subprocess.run([sys.executable, "process_consolidated_data.py"], check=True)
        
        # Step 3: Copy files to src/data/
        print("📁 Copying files to src/data/...")
        if os.name == 'nt':  # Windows
            subprocess.run(["cmd", "/c", "copy", "players.json", "src\\data\\"], check=True)
            subprocess.run(["cmd", "/c", "copy", "player_stats.json", "src\\data\\"], check=True)
        else:  # Unix/Linux/Mac
            subprocess.run(["cp", "players.json", "src/data/"], check=True)
            subprocess.run(["cp", "player_stats.json", "src/data/"], check=True)
        
        print("✅ Stats updated successfully!")
        print("🔄 Restart your development server to see changes.")
        return True
        
    except subprocess.CalledProcessError as e:
        print(f"❌ Error during update: {e}")
        return False
    except Exception as e:
        print(f"❌ Unexpected error: {e}")
        return False

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1) 