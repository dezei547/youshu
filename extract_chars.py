import os

def get_gb2312_level1():
    chars = []
    # GB2312 level 1: 0xB0A1 - 0xD7F9
    for i in range(0xB0, 0xD8):
        for j in range(0xA1, 0xFF):
            try:
                char = bytes([i, j]).decode('gb2312')
                chars.append(char)
            except:
                continue
    return "".join(chars)

def extract_from_project(directory):
    chars = set()
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.tsx', '.ts', '.js', '.html', '.css', '.md')):
                with open(os.path.join(root, file), 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                    for char in content:
                        if ord(char) > 127:
                            chars.add(char)
    return "".join(list(chars))

# ASCII
ascii_chars = "".join([chr(i) for i in range(32, 127)])
# Project chars
project_chars = extract_from_project('src') + extract_from_project('public')
# Common 3755 chars (GB2312 Level 1)
common_chars = get_gb2312_level1()

# Combine and unique
final_chars = "".join(sorted(list(set(ascii_chars + project_chars + common_chars))))

with open('needed_chars.txt', 'w', encoding='utf-8') as f:
    f.write(final_chars)

print(f"Total characters for subset: {len(final_chars)}")
