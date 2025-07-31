import pandas as pd
import json

# Load players for id mapping
with open('players.json') as f:
    players = json.load(f)

# Build a lookup by jersey number and name
id_lookup = {}
for p in players:
    key = (str(p['jersey_number']), p['first_name'].lower(), p['last_name'].lower())
    id_lookup[key] = p['id']

# Helper to get player_id
def get_player_id(row):
    num = str(int(row['Number'])) if str(row['Number']).isdigit() else str(row['Number'])
    first = str(row.get('First', '')).strip().lower()
    last = str(row.get('Last', '')).strip().lower()
    return id_lookup.get((num, first, last), None)

# Batting
batting = pd.read_json('batting_stats.json')
batting_stats = []
for _, row in batting.iterrows():
    pid = get_player_id(row)
    if not pid or row['Number'] in ['Totals', 'Glossary', None, '']:
        continue
    entry = {'player_id': pid, 'stat_type': 'batting', 'season': '2024'}
    entry.update(row.drop(['Number', 'First', 'Last']).to_dict())
    batting_stats.append(entry)

# Pitching
pitching = pd.read_json('pitching_stats.json')
pitching_stats = []
for _, row in pitching.iterrows():
    pid = get_player_id(row)
    if not pid or row['Number'] in ['Totals', 'Glossary', None, '']:
        continue
    entry = {'player_id': pid, 'stat_type': 'pitching', 'season': '2024'}
    entry.update(row.drop(['Number', 'First', 'Last']).to_dict())
    pitching_stats.append(entry)

# Fielding
fielding = pd.read_json('fielding_stats.json')
fielding_stats = []
for _, row in fielding.iterrows():
    pid = get_player_id(row)
    if not pid or row['Number'] in ['Totals', 'Glossary', None, '']:
        continue
    entry = {'player_id': pid, 'stat_type': 'fielding', 'season': '2024'}
    entry.update(row.drop(['Number', 'First', 'Last']).to_dict())
    fielding_stats.append(entry)

# Combine and write
all_stats = batting_stats + pitching_stats + fielding_stats
with open('player_stats.json', 'w') as f:
    json.dump(all_stats, f, indent=2) 