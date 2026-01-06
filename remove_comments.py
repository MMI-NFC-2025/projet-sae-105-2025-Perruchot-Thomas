import re
import sys

if len(sys.argv) != 2:
    print("Usage: python remove_comments.py <file>")
    sys.exit(1)

file_path = sys.argv[1]

with open(file_path, 'r') as f:
    content = f.read()

# Remove /* */ comments, including multi-line
content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)

with open(file_path, 'w') as f:
    f.write(content)

print(f"Comments removed from {file_path}")