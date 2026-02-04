import os
import re

def extract_chars(directory):
    chars = set()
    # Basic ASCII
    for i in range(32, 127):
        chars.add(chr(i))
    
    # Walk through src and public
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.tsx', '.ts', '.js', '.html', '.css')):
                with open(os.path.join(root, file), 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                    for char in content:
                        if ord(char) > 127: # Keep non-ASCII
                            chars.add(char)
    return "".join(sorted(list(chars)))

# Also adding a few common Chinese characters that might be needed later
extra_common = "的一是在不了有和人这中大来上个国得以们到里们自去时行家学下过用也后能出子说下而于地为下于" 

all_chars = extract_chars('src') + extract_chars('public') + extra_common
# Unique them
final_chars = "".join(sorted(list(set(all_chars))))

with open('needed_chars.txt', 'w', encoding='utf-8') as f:
    f.write(final_chars)

print(f"Extracted {len(final_chars)} unique characters.")
