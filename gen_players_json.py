import pandas as pd
import json

# Read the roster CSV
roster = pd.read_csv('Player_Roster_JSON.csv').fillna('')

def make_id(row):
    parts = row['full_name'].split(' ')
    if row['full_name']:
        return (parts[0][:1] + parts[-1]).lower()
    return str(row['jersey_number'])

roster['player_id'] = roster.apply(make_id, axis=1)

players = []
for _, r in roster.iterrows():
    players.append({
        'id': r['player_id'],
        'first_name': r['full_name'].split(' ')[0] if r['full_name'] else '',
        'last_name': ' '.join(r['full_name'].split(' ')[1:]) if r['full_name'] else '',
        'jersey_number': r['jersey_number'],
        'position': r['position'],
        'bats': r['bats'],
        'throws': r['throws'],
        'height': r['height'],
        'weight': r['weight'],
        'birthdate': r['birthdate'],
        'hometown': r['hometown'],
        'debut_year': r['debut_year'],
        'profile_picture_url': r['profile_picture_url']
    })

with open('players.json', 'w') as f:
    json.dump(players, f, indent=2) 