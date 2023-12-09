<h1>Countries</h1>

<p>Acesta un un proiect realizat de Jizdan Ianec si Mihai Pricop pentru MAP.</p>
<p>Pentru acest proiect am folosit Next.JS 14, Typescript, shadcn ( library component ), Supabase si API-ul de la Google Maps.</p>
<h5>Ce reprezinta acest proiect?</h5>
<p>Acest proiect ofera posibilitatea utilizatorilor de a se autentifica, inregistra, adauga tari pe harta cu diferite culori. Ulterior, tarile pot fi modificate.</p>

<h5>How to run?</h5>
<p>npm install</p>
<p>npm run build</p>
<p>npm run start</p>

<h5>Docker steps</h5>

<p>Docker hub link: https://hub.docker.com/layers/pricopmihai/map_project/latest/images/sha256:5b48bd4a0dcb295d31b922dc4cdbeb615b0d33d1daa7f335d2804e776f2d6e71?uuid=A2482BE4-5F72-489D-93CC-5648A20839C1</p>
<p>docker run --hostname=ee47e0bda96c --mac-address=02:42:ac:11:00:02 --env=PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin --env=NODE_VERSION=18.19.0 --env=YARN_VERSION=1.22.19 --workdir=/usr/src/app -p 80:3000 --restart=no --runtime=runc -d pricopmihai/map_project</p>
<p>Acces the website with http://localhost</p>

<p>To stop use these commands: docker ps and docker stop CONTAINER ID</p>
