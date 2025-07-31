#!/usr/bin/env python3
"""
Process Consolidated Data Script for Town & Country Ford Baseball
This script processes the single consolidated Excel file and generates the proper JSON files.
"""

import pandas as pd
import json
import re

def clean_player_name(name):
    """Clean and format player names"""
    if pd.isna(name) or name == '':
        return ''
    return str(name).strip()

def extract_player_info(df):
    """Extract player information from the consolidated file"""
    players = []
    
    # The structure is:
    # Column 0: Number (jersey number)
    # Column 1: Last (last name) 
    # Column 2: First (first name)
    # Column 3: Batting (section header)
    
    for idx, row in df.iterrows():
        # Skip header rows
        if idx == 0:
            continue
            
        # Check if this row has a jersey number
        jersey_num = row.iloc[0]  # Column 0
        last_name = row.iloc[1]   # Column 1
        first_name = row.iloc[2]  # Column 2
        
        # Check if we have valid player data
        if pd.notna(jersey_num) and pd.notna(last_name) and pd.notna(first_name):
            try:
                jersey_num = int(jersey_num)
                last_name = clean_player_name(last_name)
                first_name = clean_player_name(first_name)
                
                if last_name and first_name and jersey_num > 0:
                    # Create player ID
                    player_id = (first_name[0] + last_name).lower()
                    
                    player = {
                        'id': player_id,
                        'first_name': first_name,
                        'last_name': last_name,
                        'jersey_number': jersey_num,
                        'position': '',
                        'bats': '',
                        'throws': '',
                        'height': '',
                        'weight': '',
                        'birthdate': '',
                        'hometown': '',
                        'debut_year': '',
                        'profile_picture_url': ''
                    }
                    
                    players.append(player)
                    print(f"Found player: {first_name} {last_name} (#{jersey_num})")
            except (ValueError, TypeError):
                continue
    
    return players

def extract_stats(df):
    """Extract batting, pitching, and fielding stats"""
    stats = []
    
    # Find the sections by looking for headers
    batting_start = None
    pitching_start = None
    fielding_start = None
    
    for idx, row in df.iterrows():
        for col in df.columns:
            if pd.notna(row[col]):
                cell_value = str(row[col]).lower()
                if 'batting' in cell_value:
                    batting_start = idx
                elif 'pitching' in cell_value:
                    pitching_start = idx
                elif 'fielding' in cell_value:
                    fielding_start = idx
    
    # For now, create basic stats for all players
    # You can enhance this to extract actual stats from the file
    return stats

def main():
    print("🔄 Processing consolidated T&CF12games.csv.xlsx...")
    
    try:
        # Read the consolidated file
        df = pd.read_excel('T&CF12games.csv.xlsx')
        print(f"📊 Loaded file with shape: {df.shape}")
        
        # Extract player information
        players = extract_player_info(df)
        print(f"👥 Found {len(players)} players")
        
        # Save players.json
        with open('players.json', 'w') as f:
            json.dump(players, f, indent=2)
        print("✅ Saved players.json")
        
        # Create player_stats.json with basic structure
        player_stats = []
        for player in players:
            # Add batting stats
            player_stats.append({
                'player_id': player['id'],
                'stat_type': 'batting',
                'season': '2024',
                'GP': 0,
                'AB': 0,
                'H': 0,
                'HR': 0,
                'RBI': 0,
                'AVG': 0,
                'OBP': 0,
                'SLG': 0,
                'SB': 0
            })
            
            # Add pitching stats
            player_stats.append({
                'player_id': player['id'],
                'stat_type': 'pitching',
                'season': '2024',
                'IP': 0,
                'ERA': 0,
                'W': 0,
                'L': 0,
                'SO': 0,
                'BB': 0,
                'WHIP': 0,
                'SV': 0
            })
            
            # Add fielding stats
            player_stats.append({
                'player_id': player['id'],
                'stat_type': 'fielding',
                'season': '2024',
                'GP': 0,
                'TC': 0,
                'PO': 0,
                'A': 0,
                'E': 0,
                'FPCT': 0
            })
        
        # Save player_stats.json
        with open('player_stats.json', 'w') as f:
            json.dump(player_stats, f, indent=2)
        print("✅ Saved player_stats.json")
        
        # Copy to src/data/
        import subprocess
        import os
        
        print("📁 Copying files to src/data/...")
        if os.name == 'nt':  # Windows
            subprocess.run(["cmd", "/c", "copy", "players.json", "src\\data\\"], check=True)
            subprocess.run(["cmd", "/c", "copy", "player_stats.json", "src\\data\\"], check=True)
        else:  # Unix/Linux/Mac
            subprocess.run(["cp", "players.json", "src/data/"], check=True)
            subprocess.run(["cp", "player_stats.json", "src/data/"], check=True)
        
        print("✅ Consolidated data processed successfully!")
        print("🔄 Restart your development server to see changes.")
        
    except Exception as e:
        print(f"❌ Error processing consolidated file: {e}")
        return False
    
    return True

if __name__ == "__main__":
    success = main()
    exit(0 if success else 1) 