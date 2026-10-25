import json
import re

with open('/tmp/target_page.html', 'r', encoding='utf-8') as f:
    full_html = f.read()

# Let's inspect the sections in /tmp/detailed_sections.txt
# Let's write a comprehensive dump of all texts in each section

for idx in range(12):
    with open(f'/tmp/sec_{idx}.html', 'r', encoding='utf-8') as sf:
        html = sf.read()
    print(f"==================== SECTION {idx} ====================")
    
    # Extract all text nodes with some context
    cleaned = re.sub(r'<script[\s\S]*?</script>', '', html)
    cleaned = re.sub(r'<style[\s\S]*?</style>', '', html)
    cleaned = re.sub(r'<!--[\s\S]*?-->', '', cleaned)
    
    # Extract tags
    items = re.findall(r'<([a-zA-Z0-9]+)([^>]*)>([^<]*)', cleaned)
    seen = []
    for tag, attrs, text in items:
        t = text.strip()
        if t and len(t) > 1 and not t.startswith('{') and not t.startswith('var '):
            cls = re.search(r'class=[\"\']([^\"\']+)[\"\']', attrs)
            c = cls.group(1) if cls else ''
            seen.append(f"<{tag} class='{c[:30]}'>{t}")
    print('\n'.join(seen[:30]))
    if len(seen) > 30:
        print(f"... total {len(seen)} items")
