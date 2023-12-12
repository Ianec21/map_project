# Countries

<p>Acesta un un proiect realizat de Jizdan Ianec si Mihai Pricop pentru MAP.</p>
<p>Pentru acest proiect am folosit Next.JS 14, Typescript, shadcn ( UI library component ), Supabase si API-ul de la Google Maps pentru a lua datele despre țări.</p>
<h5>Ce reprezinta acest proiect?</h5>
Acest proiect ofera posibilitatea utilizatorilor de a se autentifica, inregistra, adauga tari pe harta cu diferite culori. Ulterior, tarile pot fi modificate.
Când intrați pentru prima data pe website, vă va apărea home page-ul. Apăsând pe butonul „Show Map” o să fiți redirecționat către map page. În acest page, puteți vedea tările adăugate de ceilalți utilizatori.
Pentru a putea adăuga o țară, puteți da click pe Add Country și să introduceți datele necesare. Dacă nu sunteți autentificat, site-ul vă va redirecționa pe pagina de autentificare/înregistrare. La înregistrare primiți un mail de verificare pe e-mail. În cazul în care culoare sau numele introdus există deja în baza de date, o să primiți o eroare. Țara poate fi modificată ulterior.

# How to run locally?
```
npm install
npm run build
npm run start
```

# Docker steps

Docker hub link: 
```
https://hub.docker.com/layers/pricopmihai/map_project/latest/images/sha256:5b48bd4a0dcb295d31b922dc4cdbeb615b0d33d1daa7f335d2804e776f2d6e71?uuid=A2482BE4-5F72-489D-93CC-5648A20839C1
```
```
docker run --hostname=ee47e0bda96c --mac-address=02:42:ac:11:00:02 --env=PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin --env=NODE_VERSION=18.19.0 --env=YARN_VERSION=1.22.19 --workdir=/usr/src/app -p 80:3000 --restart=no --runtime=runc -d pricopmihai/map_project
```
<p>Accesați aplicația cu http://localhost în web browser.</p>

# To stop use these commands:
```
docker ps
docker stop CONTAINER ID
```
