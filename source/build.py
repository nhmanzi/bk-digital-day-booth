import base64
s=open('src.html').read()
s=s.replace("if(st.fin){celebrate();return}","if(st.fin){auto=false;clearTimeout(autoTimer);celebrate();return}")
import glob,os
scr='const SCR={'+','.join("'%s':'data:image/webp;base64,%s'"%(os.path.basename(p)[:-5],base64.b64encode(open(p,'rb').read()).decode()) for p in sorted(glob.glob('screens/*_*.webp')))+'};\n'
from PIL import Image
import json as _j
cols={}
for p in sorted(glob.glob('screens/*_*.webp')):
    n=os.path.basename(p)[:-5]
    if n.endswith('s'): continue
    im=Image.open(p).convert('RGB'); W,H=im.size
    hx=lambda c:'#%02x%02x%02x'%c
    cols[n]=[hx(im.getpixel((12,46))),hx(im.getpixel((W-12,46))),hx(im.getpixel((6,min(H-1,H//2))))]
scr+='const ICO={'+','.join("'%s':'data:image/png;base64,%s'"%(k,base64.b64encode(open('icons/%s.png'%k,'rb').read()).decode()) for k in ['switch','card','loan','send','bill'])+'};\n'
scr+='const SCOL='+_j.dumps(cols)+';\n'
s=s.replace("<script>\n/* ═════════════ ICONS","<script>\n"+scr+open('icons.js').read()+'\n'+open('icons2.js').read()+"\n/* ═════════════ ICONS",1)
css=""
for w in [300,400,500,600,700]:
    b=base64.b64encode(open(f'fonts/outfit-latin-{w}-normal.woff2','rb').read()).decode()
    css+=f"@font-face{{font-family:'Outfit';font-weight:{w};font-style:normal;font-display:block;src:url(data:font/woff2;base64,{b}) format('woff2')}}\n"
s=s.replace('__BG__','data:image/jpeg;base64,'+base64.b64encode(open('hills.jpg','rb').read()).decode())
s=s.replace('__QR__','data:image/svg+xml;base64,'+base64.b64encode(open('qr.svg','rb').read()).decode())
open('../index.html','w').write(s.replace('/*__FONTS__*/',css))
