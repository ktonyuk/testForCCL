// Copyright @ ColorCodedLyrics
var syl;
function hanToRom () {
syl = document.romanization.han.value + " ";
syl = syl.replace(/가/g, "ga");
syl = syl.replace(/각/g, "gak");
syl = syl.replace(/간/g, "gan");
syl = syl.replace(/갇/g, "gat");
syl = syl.replace(/갈/g, "gal");
syl = syl.replace(/갉/g, "galk");
syl = syl.replace(/갊/g, "galm");
syl = syl.replace(/감/g, "gam");
syl = syl.replace(/갑/g, "gap");
syl = syl.replace(/값/g, "gaps");
syl = syl.replace(/갓/g, "gas");
syl = syl.replace(/갔/g, "gass");
syl = syl.replace(/강/g, "gang");
syl = syl.replace(/갖/g, "gaj");
syl = syl.replace(/갗/g, "gach");
syl = syl.replace(/같/g, "gat");
syl = syl.replace(/갚/g, "gap");
syl = syl.replace(/갛/g, "gah");
syl = syl.replace(/개/g, "gae");
syl = syl.replace(/객/g, "gaek");
syl = syl.replace(/갠/g, "gaen");
syl = syl.replace(/갤/g, "gael");
syl = syl.replace(/갬/g, "gaem");
syl = syl.replace(/갭/g, "gaep");
syl = syl.replace(/갯/g, "gaes");
syl = syl.replace(/갰/g, "gaess");
syl = syl.replace(/갱/g, "gaeng");
syl = syl.replace(/갸/g, "gya");
syl = syl.replace(/갹/g, "gyak");
syl = syl.replace(/갼/g, "gyan");
syl = syl.replace(/걀/g, "gyal");
syl = syl.replace(/걋/g, "gyas");
syl = syl.replace(/걍/g, "gyang");
syl = syl.replace(/걔/g, "gyae");
syl = syl.replace(/걘/g, "gyaen");
syl = syl.replace(/걜/g, "gyael");
syl = syl.replace(/거/g, "geo");
syl = syl.replace(/걱/g, "geok");
syl = syl.replace(/건/g, "geon");
syl = syl.replace(/걷/g, "geot");
syl = syl.replace(/걸/g, "geol");
syl = syl.replace(/걺/g, "geolm");
syl = syl.replace(/검/g, "geom");
syl = syl.replace(/겁/g, "geop");
syl = syl.replace(/것/g, "geos");
syl = syl.replace(/겄/g, "geoss");
syl = syl.replace(/겅/g, "geong");
syl = syl.replace(/겆/g, "geoj");
syl = syl.replace(/겉/g, "geot");
syl = syl.replace(/겊/g, "geop");
syl = syl.replace(/겋/g, "geoh");
syl = syl.replace(/게/g, "ge");
syl = syl.replace(/겐/g, "gen");
syl = syl.replace(/겔/g, "gel");
syl = syl.replace(/겜/g, "gem");
syl = syl.replace(/겝/g, "gep");
syl = syl.replace(/겟/g, "ges");
syl = syl.replace(/겠/g, "gess");
syl = syl.replace(/겡/g, "geng");
syl = syl.replace(/겨/g, "gyeo");
syl = syl.replace(/격/g, "gyeong");
syl = syl.replace(/겪/g, "gyeonkk");
syl = syl.replace(/견/g, "gyeon");
syl = syl.replace(/겯/g, "gyeot");
syl = syl.replace(/결/g, "gyeol");
syl = syl.replace(/겸/g, "gyeom");
syl = syl.replace(/겹/g, "gyeop");
syl = syl.replace(/겻/g, "gyeos");
syl = syl.replace(/겼/g, "gyeoss");
syl = syl.replace(/경/g, "gyeong");
syl = syl.replace(/곁/g, "gyeot");
syl = syl.replace(/계/g, "gye");
syl = syl.replace(/곈/g, "gyen");
syl = syl.replace(/곌/g, "gyel");
syl = syl.replace(/곕/g, "gyep");
syl = syl.replace(/곗/g, "gyes");
syl = syl.replace(/고/g, "go");
syl = syl.replace(/곡/g, "gok");
syl = syl.replace(/곤/g, "gon");
syl = syl.replace(/곧/g, "god");
syl = syl.replace(/골/g, "gol");
syl = syl.replace(/곪/g, "golm");
syl = syl.replace(/곬/g, "gols");
syl = syl.replace(/곯/g, "golh");
syl = syl.replace(/곰/g, "gom");
syl = syl.replace(/곱/g, "gop");
syl = syl.replace(/곳/g, "gos");
syl = syl.replace(/공/g, "gong");
syl = syl.replace(/곶/g, "goj");
syl = syl.replace(/과/g, "gwa");
syl = syl.replace(/곽/g, "gwak");
syl = syl.replace(/관/g, "gwan");
syl = syl.replace(/괄/g, "gwal");
syl = syl.replace(/괆/g, "gwalm");
syl = syl.replace(/괌/g, "gwam");
syl = syl.replace(/괍/g, "gwap");
syl = syl.replace(/괏/g, "gwas");
syl = syl.replace(/광/g, "gwang");
syl = syl.replace(/괘/g, "gwae");
syl = syl.replace(/괜/g, "gwaen");
syl = syl.replace(/괠/g, "gwael");
syl = syl.replace(/괩/g, "gwaep");
syl = syl.replace(/괬/g, "gwaess");
syl = syl.replace(/괭/g, "gwaeng");
syl = syl.replace(/괴/g, "goe");
syl = syl.replace(/괵/g, "goek");
syl = syl.replace(/괸/g, "goen");
syl = syl.replace(/괼/g, "goel");
syl = syl.replace(/굄/g, "goem");
syl = syl.replace(/굅/g, "goep");
syl = syl.replace(/굇/g, "goes");
syl = syl.replace(/굉/g, "goeng");
syl = syl.replace(/교/g, "gyo");
syl = syl.replace(/굔/g, "gyon");
syl = syl.replace(/굘/g, "gyol");
syl = syl.replace(/굡/g, "gyop");
syl = syl.replace(/굣/g, "gyos");
syl = syl.replace(/구/g, "gu");
syl = syl.replace(/국/g, "guk");
syl = syl.replace(/군/g, "gun");
syl = syl.replace(/굳/g, "gud");
syl = syl.replace(/굴/g, "gul");
syl = syl.replace(/굵/g, "gulk");
syl = syl.replace(/굶/g, "gulm");
syl = syl.replace(/굻/g, "gulh");
syl = syl.replace(/굼/g, "gum");
syl = syl.replace(/굽/g, "gup");
syl = syl.replace(/굿/g, "gus");
syl = syl.replace(/궁/g, "gung");
syl = syl.replace(/궂/g, "guj");
syl = syl.replace(/궈/g, "gweo");
syl = syl.replace(/궉/g, "gweok");
syl = syl.replace(/권/g, "gwen");
syl = syl.replace(/궐/g, "gwel");
syl = syl.replace(/궜/g, "gweoss");
syl = syl.replace(/궝/g, "gweong");
syl = syl.replace(/궤/g, "gwe");
syl = syl.replace(/궷/g, "gwes");
syl = syl.replace(/귀/g, "gwi");
syl = syl.replace(/귁/g, "gwik");
syl = syl.replace(/귄/g, "gwin");
syl = syl.replace(/귈/g, "gwil");
syl = syl.replace(/귐/g, "gwim");
syl = syl.replace(/귑/g, "gwip");
syl = syl.replace(/귓/g, "gwis");
syl = syl.replace(/규/g, "gyu");
syl = syl.replace(/균/g, "gyun");
syl = syl.replace(/귤/g, "gyul");
syl = syl.replace(/그/g, "geu");
syl = syl.replace(/극/g, "geuk");
syl = syl.replace(/근/g, "geun");
syl = syl.replace(/귿/g, "geud");
syl = syl.replace(/글/g, "geul");
syl = syl.replace(/긁/g, "geulk");
syl = syl.replace(/금/g, "geum");
syl = syl.replace(/급/g, "geup");
syl = syl.replace(/긋/g, "geus");
syl = syl.replace(/긍/g, "geung");
syl = syl.replace(/긔/g, "gi");
syl = syl.replace(/기/g, "gi");
syl = syl.replace(/긱/g, "gik");
syl = syl.replace(/긴/g, "gin");
syl = syl.replace(/긷/g, "gid");
syl = syl.replace(/길/g, "gil");
syl = syl.replace(/긺/g, "gilm");
syl = syl.replace(/김/g, "gim");
syl = syl.replace(/깁/g, "gip");
syl = syl.replace(/깃/g, "gis");
syl = syl.replace(/깅/g, "ging");
syl = syl.replace(/깆/g, "gij");
syl = syl.replace(/깊/g, "gip");
syl = syl.replace(/까/g, "kka");
syl = syl.replace(/깍/g, "kkak");
syl = syl.replace(/깎/g, "kkakk");
syl = syl.replace(/깐/g, "kkan");
syl = syl.replace(/깔/g, "kkal");
syl = syl.replace(/깖/g, "kkalm");
syl = syl.replace(/깜/g, "kkam");
syl = syl.replace(/깝/g, "kkap");
syl = syl.replace(/깟/g, "kkas");
syl = syl.replace(/깠/g, "kkass");
syl = syl.replace(/깡/g, "kkang");
syl = syl.replace(/깥/g, "kkat");
syl = syl.replace(/깨/g, "kkae");
syl = syl.replace(/깩/g, "kkaek");
syl = syl.replace(/깬/g, "kkaen");
syl = syl.replace(/깰/g, "kkael");
syl = syl.replace(/깸/g, "kkaem");
syl = syl.replace(/깹/g, "kkaep");
syl = syl.replace(/깻/g, "kkaes");
syl = syl.replace(/깼/g, "kkaess");
syl = syl.replace(/깽/g, "kkaeng");
syl = syl.replace(/꺄/g, "kkya");
syl = syl.replace(/꺅/g, "kkyak");
syl = syl.replace(/꺌/g, "kkyal");
syl = syl.replace(/꺼/g, "kkeo");
syl = syl.replace(/꺽/g, "kkeok");
syl = syl.replace(/꺾/g, "kkeokk");
syl = syl.replace(/껀/g, "kkeon");
syl = syl.replace(/껄/g, "kkeol");
syl = syl.replace(/껌/g, "kkeom");
syl = syl.replace(/껍/g, "kkeop");
syl = syl.replace(/껏/g, "kkeos");
syl = syl.replace(/껐/g, "kkeoss");
syl = syl.replace(/껑/g, "kkeong");
syl = syl.replace(/께/g, "kke");
syl = syl.replace(/껙/g, "kkek");
syl = syl.replace(/껜/g, "kken");
syl = syl.replace(/껨/g, "kkem");
syl = syl.replace(/껫/g, "kkes");
syl = syl.replace(/껭/g, "kkeng");
syl = syl.replace(/껴/g, "kkyeo");
syl = syl.replace(/껸/g, "kkyeon");
syl = syl.replace(/껼/g, "kkyeol");
syl = syl.replace(/꼇/g, "kkyeos");
syl = syl.replace(/꼈/g, "kkyeoss");
syl = syl.replace(/꼍/g, "kkyeot");
syl = syl.replace(/꼐/g, "kkye");
syl = syl.replace(/꼬/g, "kko");
syl = syl.replace(/꼭/g, "kkok");
syl = syl.replace(/꼰/g, "kkon");
syl = syl.replace(/꼲/g, "kkonh");
syl = syl.replace(/꼴/g, "kkol");
syl = syl.replace(/꼼/g, "kkom");
syl = syl.replace(/꼽/g, "kkop");
syl = syl.replace(/꼿/g, "kkos");
syl = syl.replace(/꽁/g, "kkong");
syl = syl.replace(/꽂/g, "kkoj");
syl = syl.replace(/꽃/g, "kkoch");
syl = syl.replace(/꽈/g, "kkwa");
syl = syl.replace(/꽉/g, "kkwak");
syl = syl.replace(/꽐/g, "kkwal");
syl = syl.replace(/꽜/g, "kkwass");
syl = syl.replace(/꽝/g, "kkwang");
syl = syl.replace(/꽤/g, "kkwae");
syl = syl.replace(/꽥/g, "kkwaek");
syl = syl.replace(/꽹/g, "kkwaeng");
syl = syl.replace(/꾀/g, "kkoe");
syl = syl.replace(/꾄/g, "kkoen");
syl = syl.replace(/꾈/g, "kkoel");
syl = syl.replace(/꾐/g, "kkoem");
syl = syl.replace(/꾑/g, "kkoep");
syl = syl.replace(/꾕/g, "kkoeng");
syl = syl.replace(/꾜/g, "kkyo");
syl = syl.replace(/꾸/g, "kku");
syl = syl.replace(/꾹/g, "kkuk");
syl = syl.replace(/꾼/g, "kkun");
syl = syl.replace(/꿀/g, "kkul");
syl = syl.replace(/꿇/g, "kkulh");
syl = syl.replace(/꿈/g, "kkum");
syl = syl.replace(/꿉/g, "kkup");
syl = syl.replace(/꿋/g, "kkus");
syl = syl.replace(/꿍/g, "kkung");
syl = syl.replace(/꿎/g, "kkuj");
syl = syl.replace(/꿔/g, "kkweo");
syl = syl.replace(/꿜/g, "kkweol");
syl = syl.replace(/꿨/g, "kkweoss");
syl = syl.replace(/꿩/g, "kkweong");
syl = syl.replace(/꿰/g, "kkwe");
syl = syl.replace(/꿱/g, "kkwek");
syl = syl.replace(/꿴/g, "kkwen");
syl = syl.replace(/꿸/g, "kkwel");
syl = syl.replace(/뀀/g, "kkwem");
syl = syl.replace(/뀁/g, "kkwep");
syl = syl.replace(/뀄/g, "kkwess");
syl = syl.replace(/뀌/g, "kkwi");
syl = syl.replace(/뀐/g, "kkwin");
syl = syl.replace(/뀔/g, "kkwil");
syl = syl.replace(/뀜/g, "kkwim");
syl = syl.replace(/뀝/g, "kkwip");
syl = syl.replace(/뀨/g, "kkyu");
syl = syl.replace(/끄/g, "kkeu");
syl = syl.replace(/끅/g, "kkeuk");
syl = syl.replace(/끈/g, "kkeun");
syl = syl.replace(/끊/g, "kkeunh");
syl = syl.replace(/끌/g, "kkeul");
syl = syl.replace(/끎/g, "kkeulm");
syl = syl.replace(/끓/g, "kkeulh");
syl = syl.replace(/끔/g, "kkeum");
syl = syl.replace(/끕/g, "kkeup");
syl = syl.replace(/끗/g, "kkeus");
syl = syl.replace(/끙/g, "kkeung");
syl = syl.replace(/끝/g, "kkeut");
syl = syl.replace(/끼/g, "kki");
syl = syl.replace(/끽/g, "kkik");
syl = syl.replace(/낀/g, "kkin");
syl = syl.replace(/낄/g, "kkil");
syl = syl.replace(/낌/g, "kkim");
syl = syl.replace(/낍/g, "kkip");
syl = syl.replace(/낏/g, "kkis");
syl = syl.replace(/낑/g, "kking");
syl = syl.replace(/나/g, "na");
syl = syl.replace(/낙/g, "nak");
syl = syl.replace(/낚/g, "nakk");
syl = syl.replace(/난/g, "nan");
syl = syl.replace(/낟/g, "nad");
syl = syl.replace(/날/g, "nal");
syl = syl.replace(/낡/g, "nalk");
syl = syl.replace(/낢/g, "nalm");
syl = syl.replace(/남/g, "nam");
syl = syl.replace(/납/g, "nap");
syl = syl.replace(/낫/g, "nas");
syl = syl.replace(/났/g, "nass");
syl = syl.replace(/낭/g, "nang");
syl = syl.replace(/낮/g, "naj");
syl = syl.replace(/낯/g, "nach");
syl = syl.replace(/낱/g, "nat");
syl = syl.replace(/낳/g, "nah");
syl = syl.replace(/내/g, "nae");
syl = syl.replace(/낵/g, "naek");
syl = syl.replace(/낸/g, "naen");
syl = syl.replace(/낼/g, "nael");
syl = syl.replace(/냄/g, "naem");
syl = syl.replace(/냅/g, "naep");
syl = syl.replace(/냇/g, "naes");
syl = syl.replace(/냈/g, "naess");
syl = syl.replace(/냉/g, "naeng");
syl = syl.replace(/냐/g, "nya");
syl = syl.replace(/냑/g, "nyak");
syl = syl.replace(/냔/g, "nyan");
syl = syl.replace(/냘/g, "nyal");
syl = syl.replace(/냠/g, "nyam");
syl = syl.replace(/냥/g, "nyang");
syl = syl.replace(/너/g, "neo");
syl = syl.replace(/넉/g, "neok");
syl = syl.replace(/넋/g, "neoks");
syl = syl.replace(/넌/g, "neon");
syl = syl.replace(/널/g, "neol");
syl = syl.replace(/넒/g, "neolm");
syl = syl.replace(/넓/g, "neolp");
syl = syl.replace(/넘/g, "neom");
syl = syl.replace(/넙/g, "neop");
syl = syl.replace(/넛/g, "neos");
syl = syl.replace(/넜/g, "neoss");
syl = syl.replace(/넝/g, "neong");
syl = syl.replace(/넣/g, "neoh");
syl = syl.replace(/네/g, "ne");
syl = syl.replace(/넥/g, "nek");
syl = syl.replace(/넨/g, "nen");
syl = syl.replace(/넬/g, "nel");
syl = syl.replace(/넴/g, "nem");
syl = syl.replace(/넵/g, "nep");
syl = syl.replace(/넷/g, "nes");
syl = syl.replace(/넸/g, "ness");
syl = syl.replace(/넹/g, "neng");
syl = syl.replace(/녀/g, "nyeo");
syl = syl.replace(/녁/g, "nyeok");
syl = syl.replace(/년/g, "nyeon");
syl = syl.replace(/녈/g, "nyeol");
syl = syl.replace(/념/g, "nyeom");
syl = syl.replace(/녑/g, "nyeop");
syl = syl.replace(/녔/g, "nyeoss");
syl = syl.replace(/녕/g, "nyeong");
syl = syl.replace(/녘/g, "nyeok");
syl = syl.replace(/녜/g, "nye");
syl = syl.replace(/녠/g, "nyen");
syl = syl.replace(/노/g, "no");
syl = syl.replace(/녹/g, "nok");
syl = syl.replace(/논/g, "non");
syl = syl.replace(/놀/g, "nol");
syl = syl.replace(/놂/g, "nolm");
syl = syl.replace(/놈/g, "nom");
syl = syl.replace(/놉/g, "nop");
syl = syl.replace(/놋/g, "nos");
syl = syl.replace(/농/g, "nong");
syl = syl.replace(/높/g, "nop");
syl = syl.replace(/놓/g, "noh");
syl = syl.replace(/놔/g, "nwa");
syl = syl.replace(/놘/g, "nwan");
syl = syl.replace(/놜/g, "nwal");
syl = syl.replace(/놨/g, "nwass");
syl = syl.replace(/뇌/g, "noe");
syl = syl.replace(/뇐/g, "noen");
syl = syl.replace(/뇔/g, "noel");
syl = syl.replace(/뇜/g, "noem");
syl = syl.replace(/뇝/g, "noep");
syl = syl.replace(/뇟/g, "noes");
syl = syl.replace(/뇨/g, "nyo");
syl = syl.replace(/뇩/g, "nyok");
syl = syl.replace(/뇬/g, "nyon");
syl = syl.replace(/뇰/g, "nyol");
syl = syl.replace(/뇹/g, "nyop");
syl = syl.replace(/뇻/g, "nyos");
syl = syl.replace(/뇽/g, "nyong");
syl = syl.replace(/누/g, "nu");
syl = syl.replace(/눅/g, "nuk");
syl = syl.replace(/눈/g, "nun");
syl = syl.replace(/눋/g, "nud");
syl = syl.replace(/눌/g, "nul");
syl = syl.replace(/눔/g, "num");
syl = syl.replace(/눕/g, "nup");
syl = syl.replace(/눗/g, "nus");
syl = syl.replace(/눙/g, "nung");
syl = syl.replace(/눠/g, "nweo");
syl = syl.replace(/눴/g, "nweoss");
syl = syl.replace(/눼/g, "nwe");
syl = syl.replace(/뉘/g, "nwi");
syl = syl.replace(/뉜/g, "nwin");
syl = syl.replace(/뉠/g, "nwil");
syl = syl.replace(/뉨/g, "nwim");
syl = syl.replace(/뉩/g, "nwip");
syl = syl.replace(/뉴/g, "nyu");
syl = syl.replace(/뉵/g, "nyuk");
syl = syl.replace(/뉼/g, "nyul");
syl = syl.replace(/늄/g, "nyum");
syl = syl.replace(/늅/g, "nyup");
syl = syl.replace(/늉/g, "nyung");
syl = syl.replace(/느/g, "neu");
syl = syl.replace(/늑/g, "neuk");
syl = syl.replace(/는/g, "neun");
syl = syl.replace(/늘/g, "neul");
syl = syl.replace(/늙/g, "neulk");
syl = syl.replace(/늚/g, "neulm");
syl = syl.replace(/늠/g, "neum");
syl = syl.replace(/늡/g, "neup");
syl = syl.replace(/늣/g, "neus");
syl = syl.replace(/능/g, "neung");
syl = syl.replace(/늦/g, "neuj");
syl = syl.replace(/늪/g, "neup");
syl = syl.replace(/늬/g, "ni");
syl = syl.replace(/늰/g, "nuin");
syl = syl.replace(/늴/g, "nuil");
syl = syl.replace(/니/g, "ni");
syl = syl.replace(/닉/g, "nik");
syl = syl.replace(/닌/g, "nin");
syl = syl.replace(/닐/g, "nil");
syl = syl.replace(/닒/g, "nilm");
syl = syl.replace(/님/g, "nim");
syl = syl.replace(/닙/g, "nip");
syl = syl.replace(/닛/g, "nis");
syl = syl.replace(/닝/g, "ning");
syl = syl.replace(/닢/g, "nip");
syl = syl.replace(/다/g, "da");
syl = syl.replace(/닥/g, "dak");
syl = syl.replace(/닦/g, "dakk");
syl = syl.replace(/단/g, "dan");
syl = syl.replace(/닫/g, "dad");
syl = syl.replace(/달/g, "dal");
syl = syl.replace(/닭/g, "dalk");
syl = syl.replace(/닮/g, "dalm");
syl = syl.replace(/닯/g, "dalp");
syl = syl.replace(/닳/g, "dalh");
syl = syl.replace(/담/g, "dam");
syl = syl.replace(/답/g, "dap");
syl = syl.replace(/닷/g, "das");
syl = syl.replace(/닸/g, "dass");
syl = syl.replace(/당/g, "dang");
syl = syl.replace(/닺/g, "daj");
syl = syl.replace(/닻/g, "dach");
syl = syl.replace(/닿/g, "dah");
syl = syl.replace(/대/g, "dae");
syl = syl.replace(/댁/g, "daek");
syl = syl.replace(/댄/g, "daen");
syl = syl.replace(/댈/g, "dael");
syl = syl.replace(/댐/g, "daem");
syl = syl.replace(/댑/g, "daep");
syl = syl.replace(/댓/g, "daes");
syl = syl.replace(/댔/g, "daess");
syl = syl.replace(/댕/g, "daeng");
syl = syl.replace(/댜/g, "dya");
syl = syl.replace(/더/g, "deo");
syl = syl.replace(/덕/g, "deok");
syl = syl.replace(/덖/g, "deokk");
syl = syl.replace(/던/g, "deon");
syl = syl.replace(/덛/g, "deod");
syl = syl.replace(/덜/g, "deol");
syl = syl.replace(/덞/g, "deolm");
syl = syl.replace(/덟/g, "deolp");
syl = syl.replace(/덤/g, "deom");
syl = syl.replace(/덥/g, "deop");
syl = syl.replace(/덧/g, "deos");
syl = syl.replace(/덩/g, "deong");
syl = syl.replace(/덫/g, "deoch");
syl = syl.replace(/덮/g, "deop");
syl = syl.replace(/데/g, "de");
syl = syl.replace(/덱/g, "dek");
syl = syl.replace(/덴/g, "den");
syl = syl.replace(/델/g, "del");
syl = syl.replace(/뎀/g, "dem");
syl = syl.replace(/뎁/g, "dep");
syl = syl.replace(/뎃/g, "des");
syl = syl.replace(/뎄/g, "dess");
syl = syl.replace(/뎅/g, "deng");
syl = syl.replace(/뎌/g, "dyeo");
syl = syl.replace(/뎐/g, "dyeon");
syl = syl.replace(/뎔/g, "dyeol");
syl = syl.replace(/뎠/g, "dyeoss");
syl = syl.replace(/뎡/g, "dyeong");
syl = syl.replace(/뎨/g, "dye");
syl = syl.replace(/뎬/g, "dyen");
syl = syl.replace(/도/g, "do");
syl = syl.replace(/독/g, "dok");
syl = syl.replace(/돈/g, "don");
syl = syl.replace(/돋/g, "dod");
syl = syl.replace(/돌/g, "dol");
syl = syl.replace(/돎/g, "dolm");
syl = syl.replace(/돐/g, "dols");
syl = syl.replace(/돔/g, "dom");
syl = syl.replace(/돕/g, "dop");
syl = syl.replace(/돗/g, "dos");
syl = syl.replace(/동/g, "dong");
syl = syl.replace(/돛/g, "doch");
syl = syl.replace(/돝/g, "dot");
syl = syl.replace(/돠/g, "dwa");
syl = syl.replace(/돤/g, "dwan");
syl = syl.replace(/돨/g, "dwal");
syl = syl.replace(/돼/g, "dwae");
syl = syl.replace(/됐/g, "dwaet");
syl = syl.replace(/되/g, "doe");
syl = syl.replace(/된/g, "doen");
syl = syl.replace(/될/g, "doel");
syl = syl.replace(/됨/g, "doem");
syl = syl.replace(/됩/g, "doep");
syl = syl.replace(/됫/g, "does");
syl = syl.replace(/됴/g, "dyo");
syl = syl.replace(/두/g, "du");
syl = syl.replace(/둑/g, "duk");
syl = syl.replace(/둔/g, "dun");
syl = syl.replace(/둘/g, "dul");
syl = syl.replace(/둠/g, "dum");
syl = syl.replace(/둡/g, "dup");
syl = syl.replace(/둣/g, "dut");
syl = syl.replace(/둥/g, "dung");
syl = syl.replace(/둬/g, "dweo");
syl = syl.replace(/뒀/g, "dweot");
syl = syl.replace(/뒈/g, "dwe");
syl = syl.replace(/뒝/g, "dweng");
syl = syl.replace(/뒤/g, "dwi");
syl = syl.replace(/뒨/g, "dwin");
syl = syl.replace(/뒬/g, "dwil");
syl = syl.replace(/뒵/g, "dwip");
syl = syl.replace(/뒷/g, "dwit");
syl = syl.replace(/뒹/g, "dwing");
syl = syl.replace(/듀/g, "dyu");
syl = syl.replace(/듄/g, "dyun");
syl = syl.replace(/듈/g, "dyul");
syl = syl.replace(/듐/g, "dyum");
syl = syl.replace(/듕/g, "dyung");
syl = syl.replace(/드/g, "deu");
syl = syl.replace(/득/g, "deuk");
syl = syl.replace(/든/g, "deun");
syl = syl.replace(/듣/g, "deud");
syl = syl.replace(/들/g, "deul");
syl = syl.replace(/듦/g, "deulm");
syl = syl.replace(/듬/g, "deum");
syl = syl.replace(/듭/g, "deup");
syl = syl.replace(/듯/g, "deut");
syl = syl.replace(/등/g, "deung");
syl = syl.replace(/듸/g, "di");
syl = syl.replace(/디/g, "di");
syl = syl.replace(/딕/g, "dik");
syl = syl.replace(/딘/g, "din");
syl = syl.replace(/딛/g, "did");
syl = syl.replace(/딜/g, "dil");
syl = syl.replace(/딤/g, "dim");
syl = syl.replace(/딥/g, "dip");
syl = syl.replace(/딧/g, "dit");
syl = syl.replace(/딨/g, "diss");
syl = syl.replace(/딩/g, "ding");
syl = syl.replace(/딪/g, "dij");
syl = syl.replace(/따/g, "tta");
syl = syl.replace(/딱/g, "ttak");
syl = syl.replace(/딴/g, "ttan");
syl = syl.replace(/딸/g, "ttal");
syl = syl.replace(/땀/g, "ttam");
syl = syl.replace(/땁/g, "ttap");
syl = syl.replace(/땃/g, "ttas");
syl = syl.replace(/땄/g, "ttass");
syl = syl.replace(/땅/g, "ttang");
syl = syl.replace(/땋/g, "ttah");
syl = syl.replace(/때/g, "ttae");
syl = syl.replace(/땍/g, "ttaek");
syl = syl.replace(/땐/g, "ttaen");
syl = syl.replace(/땔/g, "ttael");
syl = syl.replace(/땜/g, "ttaem");
syl = syl.replace(/땝/g, "ttaep");
syl = syl.replace(/땟/g, "ttaet");
syl = syl.replace(/땠/g, "ttaess");
syl = syl.replace(/땡/g, "ttaeng");
syl = syl.replace(/떠/g, "tteo");
syl = syl.replace(/떡/g, "tteok");
syl = syl.replace(/떤/g, "tteon");
syl = syl.replace(/떨/g, "tteol");
syl = syl.replace(/떪/g, "tteolm");
syl = syl.replace(/떫/g, "tteolp");
syl = syl.replace(/떰/g, "tteom");
syl = syl.replace(/떱/g, "tteop");
syl = syl.replace(/떳/g, "tteos");
syl = syl.replace(/떴/g, "tteoss");
syl = syl.replace(/떵/g, "tteong");
syl = syl.replace(/떻/g, "tteoh");
syl = syl.replace(/떼/g, "tte");
syl = syl.replace(/떽/g, "ttek");
syl = syl.replace(/뗀/g, "tten");
syl = syl.replace(/뗄/g, "ttel");
syl = syl.replace(/뗌/g, "ttem");
syl = syl.replace(/뗍/g, "ttep");
syl = syl.replace(/뗏/g, "ttet");
syl = syl.replace(/뗐/g, "ttess");
syl = syl.replace(/뗑/g, "tteng");
syl = syl.replace(/뗘/g, "ttyeo");
syl = syl.replace(/뗬/g, "ttyeoss");
syl = syl.replace(/또/g, "tto");
syl = syl.replace(/똑/g, "ttok");
syl = syl.replace(/똔/g, "tton");
syl = syl.replace(/똘/g, "ttol");
syl = syl.replace(/똥/g, "ttong");
syl = syl.replace(/똬/g, "ttwa");
syl = syl.replace(/똴/g, "ttwal");
syl = syl.replace(/뙈/g, "ttwae");
syl = syl.replace(/뙤/g, "ttoe");
syl = syl.replace(/뙨/g, "ttoen");
syl = syl.replace(/뚜/g, "ttu");
syl = syl.replace(/뚝/g, "ttuk");
syl = syl.replace(/뚠/g, "ttun");
syl = syl.replace(/뚤/g, "ttul");
syl = syl.replace(/뚫/g, "ttulh");
syl = syl.replace(/뚬/g, "ttum");
syl = syl.replace(/뚱/g, "ttung");
syl = syl.replace(/뛔/g, "ttwe");
syl = syl.replace(/뛰/g, "ttwi");
syl = syl.replace(/뛴/g, "ttwin");
syl = syl.replace(/뛸/g, "ttwil");
syl = syl.replace(/뜀/g, "ttwim");
syl = syl.replace(/뜁/g, "ttwib");
syl = syl.replace(/뜅/g, "ttwing");
syl = syl.replace(/뜨/g, "tteu");
syl = syl.replace(/뜩/g, "tteuk");
syl = syl.replace(/뜬/g, "tteun");
syl = syl.replace(/뜯/g, "tteud");
syl = syl.replace(/뜰/g, "tteul");
syl = syl.replace(/뜸/g, "tteum");
syl = syl.replace(/뜹/g, "tteub");
syl = syl.replace(/뜻/g, "tteus");
syl = syl.replace(/띄/g, "tti");
syl = syl.replace(/띈/g, "ttuin");
syl = syl.replace(/띌/g, "ttuil");
syl = syl.replace(/띔/g, "ttuim");
syl = syl.replace(/띕/g, "ttuib");
syl = syl.replace(/띠/g, "tti");
syl = syl.replace(/띤/g, "ttin");
syl = syl.replace(/띨/g, "ttil");
syl = syl.replace(/띰/g, "ttim");
syl = syl.replace(/띱/g, "ttib");
syl = syl.replace(/띳/g, "ttis");
syl = syl.replace(/띵/g, "tting");
syl = syl.replace(/라/g, "ra");
syl = syl.replace(/락/g, "rak");
syl = syl.replace(/란/g, "ran");
syl = syl.replace(/랄/g, "ral");
syl = syl.replace(/람/g, "ram");
syl = syl.replace(/랍/g, "rab");
syl = syl.replace(/랏/g, "ras");
syl = syl.replace(/랐/g, "rass");
syl = syl.replace(/랑/g, "rang");
syl = syl.replace(/랒/g, "raj");
syl = syl.replace(/랖/g, "rap");
syl = syl.replace(/랗/g, "rah");
syl = syl.replace(/래/g, "rae");
syl = syl.replace(/랙/g, "raek");
syl = syl.replace(/랜/g, "raen");
syl = syl.replace(/랠/g, "rael");
syl = syl.replace(/램/g, "raem");
syl = syl.replace(/랩/g, "raeb");
syl = syl.replace(/랫/g, "raes");
syl = syl.replace(/랬/g, "raess");
syl = syl.replace(/랭/g, "raeng");
syl = syl.replace(/랴/g, "rya");
syl = syl.replace(/략/g, "ryak");
syl = syl.replace(/랸/g, "ryan");
syl = syl.replace(/럇/g, "ryas");
syl = syl.replace(/량/g, "ryang");
syl = syl.replace(/러/g, "reo");
syl = syl.replace(/럭/g, "reok");
syl = syl.replace(/런/g, "reon");
syl = syl.replace(/럴/g, "reol");
syl = syl.replace(/럼/g, "reom");
syl = syl.replace(/럽/g, "reob");
syl = syl.replace(/럿/g, "reos");
syl = syl.replace(/렀/g, "reoss");
syl = syl.replace(/렁/g, "reong");
syl = syl.replace(/렇/g, "reoh");
syl = syl.replace(/레/g, "re");
syl = syl.replace(/렉/g, "rek");
syl = syl.replace(/렌/g, "ren");
syl = syl.replace(/렐/g, "rel");
syl = syl.replace(/렘/g, "rem");
syl = syl.replace(/렙/g, "reb");
syl = syl.replace(/렛/g, "res");
syl = syl.replace(/렜/g, "ret");
syl = syl.replace(/렝/g, "reng");
syl = syl.replace(/려/g, "ryeo");
syl = syl.replace(/력/g, "ryeok");
syl = syl.replace(/련/g, "ryeon");
syl = syl.replace(/렬/g, "ryeol");
syl = syl.replace(/렴/g, "ryeom");
syl = syl.replace(/렵/g, "ryeob");
syl = syl.replace(/렷/g, "ryeos");
syl = syl.replace(/렸/g, "ryeoss");
syl = syl.replace(/령/g, "ryeong");
syl = syl.replace(/례/g, "rye");
syl = syl.replace(/롄/g, "ryen");
syl = syl.replace(/롑/g, "ryeb");
syl = syl.replace(/롓/g, "ryes");
syl = syl.replace(/로/g, "ro");
syl = syl.replace(/록/g, "rok");
syl = syl.replace(/론/g, "ron");
syl = syl.replace(/롤/g, "rol");
syl = syl.replace(/롬/g, "rom");
syl = syl.replace(/롭/g, "rob");
syl = syl.replace(/롯/g, "ros");
syl = syl.replace(/롱/g, "rong");
syl = syl.replace(/롸/g, "rwa");
syl = syl.replace(/롼/g, "rwan");
syl = syl.replace(/뢍/g, "rwang");
syl = syl.replace(/뢨/g, "rwaess");
syl = syl.replace(/뢰/g, "roe");
syl = syl.replace(/뢴/g, "roen");
syl = syl.replace(/뢸/g, "roel");
syl = syl.replace(/룀/g, "roem");
syl = syl.replace(/룁/g, "roeb");
syl = syl.replace(/룃/g, "roes");
syl = syl.replace(/룅/g, "roeng");
syl = syl.replace(/료/g, "ryo");
syl = syl.replace(/룐/g, "ryon");
syl = syl.replace(/룔/g, "ryol");
syl = syl.replace(/룝/g, "ryob");
syl = syl.replace(/룟/g, "ryos");
syl = syl.replace(/룡/g, "ryong");
syl = syl.replace(/루/g, "ru");
syl = syl.replace(/룩/g, "ruk");
syl = syl.replace(/룬/g, "run");
syl = syl.replace(/룰/g, "rul");
syl = syl.replace(/룸/g, "rum");
syl = syl.replace(/룹/g, "rub");
syl = syl.replace(/룻/g, "rus");
syl = syl.replace(/룽/g, "rung");
syl = syl.replace(/뤄/g, "rweo");
syl = syl.replace(/뤘/g, "rweoss");
syl = syl.replace(/뤠/g, "rwe");
syl = syl.replace(/뤼/g, "rwi");
syl = syl.replace(/뤽/g, "rwik");
syl = syl.replace(/륀/g, "rwin");
syl = syl.replace(/륄/g, "rwil");
syl = syl.replace(/륌/g, "rwim");
syl = syl.replace(/륏/g, "rwis");
syl = syl.replace(/륑/g, "rwing");
syl = syl.replace(/류/g, "ryu");
syl = syl.replace(/륙/g, "ryuk");
syl = syl.replace(/륜/g, "ryun");
syl = syl.replace(/률/g, "ryul");
syl = syl.replace(/륨/g, "ryum");
syl = syl.replace(/륩/g, "ryub");
syl = syl.replace(/륫/g, "ryus");
syl = syl.replace(/륭/g, "ryung");
syl = syl.replace(/르/g, "reu");
syl = syl.replace(/륵/g, "reuk");
syl = syl.replace(/른/g, "reun");
syl = syl.replace(/를/g, "reul");
syl = syl.replace(/름/g, "reum");
syl = syl.replace(/릅/g, "reub");
syl = syl.replace(/릇/g, "reus");
syl = syl.replace(/릉/g, "reung");
syl = syl.replace(/릊/g, "reuj");
syl = syl.replace(/릍/g, "reut");
syl = syl.replace(/릎/g, "reup");
syl = syl.replace(/리/g, "ri");
syl = syl.replace(/릭/g, "rik");
syl = syl.replace(/린/g, "rin");
syl = syl.replace(/릴/g, "ril");
syl = syl.replace(/림/g, "rim");
syl = syl.replace(/립/g, "rib");
syl = syl.replace(/릿/g, "ris");
syl = syl.replace(/링/g, "ring");
syl = syl.replace(/마/g, "ma");
syl = syl.replace(/막/g, "mak");
syl = syl.replace(/만/g, "man");
syl = syl.replace(/많/g, "manh");
syl = syl.replace(/맏/g, "mad");
syl = syl.replace(/말/g, "mal");
syl = syl.replace(/맑/g, "malk");
syl = syl.replace(/맒/g, "malm");
syl = syl.replace(/맘/g, "mam");
syl = syl.replace(/맙/g, "mab");
syl = syl.replace(/맛/g, "mas");
syl = syl.replace(/망/g, "mang");
syl = syl.replace(/맞/g, "maj");
syl = syl.replace(/맡/g, "mat");
syl = syl.replace(/맣/g, "mah");
syl = syl.replace(/매/g, "mae");
syl = syl.replace(/맥/g, "maek");
syl = syl.replace(/맨/g, "maen");
syl = syl.replace(/맬/g, "mael");
syl = syl.replace(/맴/g, "maem");
syl = syl.replace(/맵/g, "maeb");
syl = syl.replace(/맷/g, "maes");
syl = syl.replace(/맸/g, "maess");
syl = syl.replace(/맹/g, "maeng");
syl = syl.replace(/맺/g, "maej");
syl = syl.replace(/먀/g, "mya");
syl = syl.replace(/먁/g, "myak");
syl = syl.replace(/먈/g, "myal");
syl = syl.replace(/먕/g, "myang");
syl = syl.replace(/머/g, "meo");
syl = syl.replace(/먹/g, "meok");
syl = syl.replace(/먼/g, "meon");
syl = syl.replace(/멀/g, "meol");
syl = syl.replace(/멂/g, "meolm");
syl = syl.replace(/멈/g, "meom");
syl = syl.replace(/멉/g, "meob");
syl = syl.replace(/멋/g, "meos");
syl = syl.replace(/멍/g, "meong");
syl = syl.replace(/멎/g, "meoj");
syl = syl.replace(/멓/g, "meoh");
syl = syl.replace(/메/g, "me");
syl = syl.replace(/멕/g, "mek");
syl = syl.replace(/멘/g, "men");
syl = syl.replace(/멜/g, "mel");
syl = syl.replace(/멤/g, "mem");
syl = syl.replace(/멥/g, "meb");
syl = syl.replace(/멧/g, "mes");
syl = syl.replace(/멨/g, "mess");
syl = syl.replace(/멩/g, "meng");
syl = syl.replace(/며/g, "myeo");
syl = syl.replace(/멱/g, "myeok");
syl = syl.replace(/면/g, "myeon");
syl = syl.replace(/멸/g, "myeol");
syl = syl.replace(/몃/g, "myeos");
syl = syl.replace(/몄/g, "myeoss");
syl = syl.replace(/명/g, "myeong");
syl = syl.replace(/몇/g, "myeoch");
syl = syl.replace(/몌/g, "mye");
syl = syl.replace(/모/g, "mo");
syl = syl.replace(/목/g, "mok");
syl = syl.replace(/몫/g, "moks");
syl = syl.replace(/몬/g, "mon");
syl = syl.replace(/몰/g, "mol");
syl = syl.replace(/몲/g, "molm");
syl = syl.replace(/몸/g, "mom");
syl = syl.replace(/몹/g, "mob");
syl = syl.replace(/못/g, "mos");
syl = syl.replace(/몽/g, "mong");
syl = syl.replace(/뫄/g, "mwa");
syl = syl.replace(/뫈/g, "mwan");
syl = syl.replace(/뫘/g, "mwass");
syl = syl.replace(/뫙/g, "mwang");
syl = syl.replace(/뫼/g, "moe");
syl = syl.replace(/묀/g, "moen");
syl = syl.replace(/묄/g, "moel");
syl = syl.replace(/묍/g, "moeb");
syl = syl.replace(/묏/g, "moes");
syl = syl.replace(/묑/g, "moeng");
syl = syl.replace(/묘/g, "myo");
syl = syl.replace(/묜/g, "myon");
syl = syl.replace(/묠/g, "myol");
syl = syl.replace(/묩/g, "myob");
syl = syl.replace(/묫/g, "myos");
syl = syl.replace(/무/g, "mu");
syl = syl.replace(/묵/g, "muk");
syl = syl.replace(/묶/g, "mukk");
syl = syl.replace(/문/g, "mun");
syl = syl.replace(/묻/g, "mud");
syl = syl.replace(/물/g, "mul");
syl = syl.replace(/묽/g, "mulk");
syl = syl.replace(/묾/g, "mulm");
syl = syl.replace(/뭄/g, "mum");
syl = syl.replace(/뭅/g, "mub");
syl = syl.replace(/뭇/g, "mus");
syl = syl.replace(/뭉/g, "mung");
syl = syl.replace(/뭍/g, "mut");
syl = syl.replace(/뭏/g, "muh");
syl = syl.replace(/뭐/g, "mweo");
syl = syl.replace(/뭔/g, "mweon");
syl = syl.replace(/뭘/g, "mweol");
syl = syl.replace(/뭡/g, "mweob");
syl = syl.replace(/뭣/g, "mweos");
syl = syl.replace(/뭬/g, "mwe");
syl = syl.replace(/뮈/g, "mwi");
syl = syl.replace(/뮌/g, "mwin");
syl = syl.replace(/뮐/g, "mwil");
syl = syl.replace(/뮤/g, "myu");
syl = syl.replace(/뮨/g, "myun");
syl = syl.replace(/뮬/g, "myul");
syl = syl.replace(/뮴/g, "myum");
syl = syl.replace(/뮷/g, "myus");
syl = syl.replace(/므/g, "meu");
syl = syl.replace(/믄/g, "meun");
syl = syl.replace(/믈/g, "meul");
syl = syl.replace(/믐/g, "meum");
syl = syl.replace(/믓/g, "meus");
syl = syl.replace(/미/g, "mi");
syl = syl.replace(/믹/g, "mik");
syl = syl.replace(/민/g, "min");
syl = syl.replace(/믿/g, "mid");
syl = syl.replace(/밀/g, "mil");
syl = syl.replace(/밂/g, "milm");
syl = syl.replace(/밈/g, "mim");
syl = syl.replace(/밉/g, "mib");
syl = syl.replace(/밋/g, "mis");
syl = syl.replace(/밌/g, "miss");
syl = syl.replace(/밍/g, "ming");
syl = syl.replace(/및/g, "mich");
syl = syl.replace(/밑/g, "mit");
syl = syl.replace(/바/g, "ba");
syl = syl.replace(/박/g, "bak");
syl = syl.replace(/밖/g, "bakk");
syl = syl.replace(/밗/g, "baks");
syl = syl.replace(/반/g, "ban");
syl = syl.replace(/받/g, "bad");
syl = syl.replace(/발/g, "bal");
syl = syl.replace(/밝/g, "balk");
syl = syl.replace(/밞/g, "balm");
syl = syl.replace(/밟/g, "bab");
syl = syl.replace(/밤/g, "bam");
syl = syl.replace(/밥/g, "bab");
syl = syl.replace(/밧/g, "bas");
syl = syl.replace(/방/g, "bang");
syl = syl.replace(/밭/g, "bat");
syl = syl.replace(/배/g, "bae");
syl = syl.replace(/백/g, "baek");
syl = syl.replace(/밴/g, "baen");
syl = syl.replace(/밸/g, "bael");
syl = syl.replace(/뱀/g, "baem");
syl = syl.replace(/뱁/g, "baeb");
syl = syl.replace(/뱃/g, "baes");
syl = syl.replace(/뱄/g, "baess");
syl = syl.replace(/뱅/g, "baeng");
syl = syl.replace(/뱉/g, "baet");
syl = syl.replace(/뱌/g, "bya");
syl = syl.replace(/뱍/g, "byak");
syl = syl.replace(/뱐/g, "byan");
syl = syl.replace(/뱝/g, "byab");
syl = syl.replace(/버/g, "beo");
syl = syl.replace(/벅/g, "beok");
syl = syl.replace(/번/g, "beon");
syl = syl.replace(/벋/g, "beod");
syl = syl.replace(/벌/g, "beol");
syl = syl.replace(/벎/g, "beolm");
syl = syl.replace(/범/g, "beom");
syl = syl.replace(/법/g, "beob");
syl = syl.replace(/벗/g, "beos");
syl = syl.replace(/벙/g, "beong");
syl = syl.replace(/벚/g, "beoj");
syl = syl.replace(/베/g, "be");
syl = syl.replace(/벡/g, "bek");
syl = syl.replace(/벤/g, "ben");
syl = syl.replace(/벧/g, "bed");
syl = syl.replace(/벨/g, "bel");
syl = syl.replace(/벰/g, "bem");
syl = syl.replace(/벱/g, "beb");
syl = syl.replace(/벳/g, "bes");
syl = syl.replace(/벴/g, "bess");
syl = syl.replace(/벵/g, "beng");
syl = syl.replace(/벼/g, "byeo");
syl = syl.replace(/벽/g, "byeok");
syl = syl.replace(/변/g, "byeon");
syl = syl.replace(/별/g, "byeol");
syl = syl.replace(/볍/g, "byeob");
syl = syl.replace(/볏/g, "byeos");
syl = syl.replace(/볐/g, "byeoss");
syl = syl.replace(/병/g, "byeong");
syl = syl.replace(/볕/g, "byeot");
syl = syl.replace(/볘/g, "bye");
syl = syl.replace(/볜/g, "byen");
syl = syl.replace(/보/g, "bo");
syl = syl.replace(/복/g, "bok");
syl = syl.replace(/볶/g, "bokk");
syl = syl.replace(/본/g, "bon");
syl = syl.replace(/볼/g, "bol");
syl = syl.replace(/봄/g, "bom");
syl = syl.replace(/봅/g, "bob");
syl = syl.replace(/봇/g, "bos");
syl = syl.replace(/봉/g, "bong");
syl = syl.replace(/봐/g, "bwa");
syl = syl.replace(/봔/g, "bwan");
syl = syl.replace(/봤/g, "bwass");
syl = syl.replace(/봬/g, "bwae");
syl = syl.replace(/뵀/g, "bwaess");
syl = syl.replace(/뵈/g, "boe");
syl = syl.replace(/뵉/g, "boek");
syl = syl.replace(/뵌/g, "boen");
syl = syl.replace(/뵐/g, "boel");
syl = syl.replace(/뵘/g, "boem");
syl = syl.replace(/뵙/g, "boeb");
syl = syl.replace(/뵤/g, "byo");
syl = syl.replace(/뵨/g, "byon");
syl = syl.replace(/부/g, "bu");
syl = syl.replace(/북/g, "buk");
syl = syl.replace(/분/g, "bun");
syl = syl.replace(/붇/g, "bud");
syl = syl.replace(/불/g, "bul");
syl = syl.replace(/붉/g, "bulk");
syl = syl.replace(/붊/g, "bulm");
syl = syl.replace(/붐/g, "bum");
syl = syl.replace(/붑/g, "bub");
syl = syl.replace(/붓/g, "bus");
syl = syl.replace(/붕/g, "bung");
syl = syl.replace(/붙/g, "but");
syl = syl.replace(/붚/g, "bup");
syl = syl.replace(/붜/g, "bweo");
syl = syl.replace(/붤/g, "bweol");
syl = syl.replace(/붰/g, "bweoss");
syl = syl.replace(/붸/g, "bwe");
syl = syl.replace(/뷔/g, "bwi");
syl = syl.replace(/뷕/g, "bwik");
syl = syl.replace(/뷘/g, "bwin");
syl = syl.replace(/뷜/g, "bwil");
syl = syl.replace(/뷩/g, "bwing");
syl = syl.replace(/뷰/g, "byu");
syl = syl.replace(/뷴/g, "byun");
syl = syl.replace(/뷸/g, "byul");
syl = syl.replace(/븀/g, "byum");
syl = syl.replace(/븃/g, "byus");
syl = syl.replace(/븅/g, "byung");
syl = syl.replace(/브/g, "beu");
syl = syl.replace(/븍/g, "beuk");
syl = syl.replace(/븐/g, "beun");
syl = syl.replace(/블/g, "beul");
syl = syl.replace(/븜/g, "beum");
syl = syl.replace(/븝/g, "beub");
syl = syl.replace(/븟/g, "beus");
syl = syl.replace(/비/g, "bi");
syl = syl.replace(/빅/g, "bik");
syl = syl.replace(/빈/g, "bin");
syl = syl.replace(/빌/g, "bil");
syl = syl.replace(/빎/g, "bilm");
syl = syl.replace(/빔/g, "bim");
syl = syl.replace(/빕/g, "bib");
syl = syl.replace(/빗/g, "bis");
syl = syl.replace(/빙/g, "bing");
syl = syl.replace(/빚/g, "bij");
syl = syl.replace(/빛/g, "bich");
syl = syl.replace(/빠/g, "ppa");
syl = syl.replace(/빡/g, "ppak");
syl = syl.replace(/빤/g, "ppan");
syl = syl.replace(/빨/g, "ppal");
syl = syl.replace(/빪/g, "ppalm");
syl = syl.replace(/빰/g, "ppam");
syl = syl.replace(/빱/g, "ppab");
syl = syl.replace(/빳/g, "ppas");
syl = syl.replace(/빴/g, "ppass");
syl = syl.replace(/빵/g, "ppang");
syl = syl.replace(/빻/g, "ppah");
syl = syl.replace(/빼/g, "ppae");
syl = syl.replace(/빽/g, "ppaek");
syl = syl.replace(/뺀/g, "ppaen");
syl = syl.replace(/뺄/g, "ppael");
syl = syl.replace(/뺌/g, "ppaem");
syl = syl.replace(/뺍/g, "ppaeb");
syl = syl.replace(/뺏/g, "ppaes");
syl = syl.replace(/뺐/g, "ppaess");
syl = syl.replace(/뺑/g, "ppaeng");
syl = syl.replace(/뺘/g, "ppya");
syl = syl.replace(/뺙/g, "ppyak");
syl = syl.replace(/뺨/g, "ppyam");
syl = syl.replace(/뻐/g, "ppeo");
syl = syl.replace(/뻑/g, "ppeok");
syl = syl.replace(/뻔/g, "ppeon");
syl = syl.replace(/뻗/g, "ppeod");
syl = syl.replace(/뻘/g, "ppeol");
syl = syl.replace(/뻠/g, "ppeom");
syl = syl.replace(/뻣/g, "ppeos");
syl = syl.replace(/뻤/g, "ppeoss");
syl = syl.replace(/뻥/g, "ppeong");
syl = syl.replace(/뻬/g, "ppe");
syl = syl.replace(/뼁/g, "ppeng");
syl = syl.replace(/뼈/g, "ppyeo");
syl = syl.replace(/뼉/g, "ppyeok");
syl = syl.replace(/뼘/g, "ppyeom");
syl = syl.replace(/뼙/g, "ppyeob");
syl = syl.replace(/뼛/g, "ppyeos");
syl = syl.replace(/뼜/g, "ppyeoss");
syl = syl.replace(/뼝/g, "ppyeong");
syl = syl.replace(/뽀/g, "ppo");
syl = syl.replace(/뽁/g, "ppok");
syl = syl.replace(/뽄/g, "ppon");
syl = syl.replace(/뽈/g, "ppol");
syl = syl.replace(/뽐/g, "ppom");
syl = syl.replace(/뽑/g, "ppob");
syl = syl.replace(/뽕/g, "ppong");
syl = syl.replace(/뾔/g, "ppoe");
syl = syl.replace(/뾰/g, "ppyo");
syl = syl.replace(/뿅/g, "ppyong");
syl = syl.replace(/뿌/g, "ppu");
syl = syl.replace(/뿍/g, "ppuk");
syl = syl.replace(/뿐/g, "ppun");
syl = syl.replace(/뿔/g, "ppul");
syl = syl.replace(/뿜/g, "ppum");
syl = syl.replace(/뿟/g, "ppus");
syl = syl.replace(/뿡/g, "ppung");
syl = syl.replace(/쀼/g, "ppyu");
syl = syl.replace(/쁑/g, "ppyung");
syl = syl.replace(/쁘/g, "ppeu");
syl = syl.replace(/쁜/g, "ppeun");
syl = syl.replace(/쁠/g, "ppeul");
syl = syl.replace(/쁨/g, "ppeum");
syl = syl.replace(/쁩/g, "ppeub");
syl = syl.replace(/삐/g, "ppi");
syl = syl.replace(/삑/g, "ppik");
syl = syl.replace(/삔/g, "ppin");
syl = syl.replace(/삘/g, "ppil");
syl = syl.replace(/삠/g, "ppim");
syl = syl.replace(/삡/g, "ppib");
syl = syl.replace(/삣/g, "ppis");
syl = syl.replace(/삥/g, "pping");
syl = syl.replace(/사/g, "sa");
syl = syl.replace(/삭/g, "sak");
syl = syl.replace(/삯/g, "saks");
syl = syl.replace(/산/g, "san");
syl = syl.replace(/삳/g, "sad");
syl = syl.replace(/살/g, "sal");
syl = syl.replace(/삵/g, "salk");
syl = syl.replace(/삶/g, "salm");
syl = syl.replace(/삼/g, "sam");
syl = syl.replace(/삽/g, "sab");
syl = syl.replace(/삿/g, "sas");
syl = syl.replace(/샀/g, "sass");
syl = syl.replace(/상/g, "sang");
syl = syl.replace(/샅/g, "sat");
syl = syl.replace(/새/g, "sae");
syl = syl.replace(/색/g, "saek");
syl = syl.replace(/샌/g, "saen");
syl = syl.replace(/샐/g, "sael");
syl = syl.replace(/샘/g, "saem");
syl = syl.replace(/샙/g, "saeb");
syl = syl.replace(/샛/g, "saes");
syl = syl.replace(/샜/g, "saess");
syl = syl.replace(/생/g, "saeng");
syl = syl.replace(/샤/g, "sya");
syl = syl.replace(/샥/g, "syak");
syl = syl.replace(/샨/g, "syan");
syl = syl.replace(/샬/g, "syal");
syl = syl.replace(/샴/g, "syam");
syl = syl.replace(/샵/g, "syab");
syl = syl.replace(/샷/g, "syas");
syl = syl.replace(/샹/g, "syang");
syl = syl.replace(/섀/g, "syae");
syl = syl.replace(/섄/g, "syaen");
syl = syl.replace(/섈/g, "syael");
syl = syl.replace(/섐/g, "syaem");
syl = syl.replace(/섕/g, "syaeng");
syl = syl.replace(/서/g, "seo");
syl = syl.replace(/석/g, "seok");
syl = syl.replace(/섞/g, "seokk");
syl = syl.replace(/섟/g, "seoks");
syl = syl.replace(/선/g, "seon");
syl = syl.replace(/섣/g, "seod");
syl = syl.replace(/설/g, "seol");
syl = syl.replace(/섦/g, "seolm");
syl = syl.replace(/섧/g, "seolb");
syl = syl.replace(/섬/g, "seom");
syl = syl.replace(/섭/g, "seob");
syl = syl.replace(/섯/g, "seos");
syl = syl.replace(/섰/g, "seoss");
syl = syl.replace(/성/g, "seong");
syl = syl.replace(/섶/g, "seop");
syl = syl.replace(/세/g, "se");
syl = syl.replace(/섹/g, "sek");
syl = syl.replace(/센/g, "sen");
syl = syl.replace(/셀/g, "sel");
syl = syl.replace(/셈/g, "sem");
syl = syl.replace(/셉/g, "seb");
syl = syl.replace(/셋/g, "ses");
syl = syl.replace(/셌/g, "sess");
syl = syl.replace(/셍/g, "seng");
syl = syl.replace(/셔/g, "syeo");
syl = syl.replace(/셕/g, "syeok");
syl = syl.replace(/션/g, "syeon");
syl = syl.replace(/셜/g, "syeol");
syl = syl.replace(/셤/g, "syeom");
syl = syl.replace(/셥/g, "syeob");
syl = syl.replace(/셧/g, "syeos");
syl = syl.replace(/셨/g, "syeoss");
syl = syl.replace(/셩/g, "syeong");
syl = syl.replace(/셰/g, "sye");
syl = syl.replace(/셴/g, "syen");
syl = syl.replace(/셸/g, "syel");
syl = syl.replace(/솅/g, "syeng");
syl = syl.replace(/소/g, "so");
syl = syl.replace(/속/g, "sok");
syl = syl.replace(/솎/g, "sokk");
syl = syl.replace(/손/g, "son");
syl = syl.replace(/솔/g, "sol");
syl = syl.replace(/솖/g, "solm");
syl = syl.replace(/솜/g, "som");
syl = syl.replace(/솝/g, "sob");
syl = syl.replace(/솟/g, "sos");
syl = syl.replace(/송/g, "song");
syl = syl.replace(/솥/g, "sot");
syl = syl.replace(/솨/g, "swa");
syl = syl.replace(/솩/g, "swak");
syl = syl.replace(/솬/g, "swan");
syl = syl.replace(/솰/g, "swal");
syl = syl.replace(/솽/g, "swang");
syl = syl.replace(/쇄/g, "swae");
syl = syl.replace(/쇈/g, "swaen");
syl = syl.replace(/쇌/g, "swael");
syl = syl.replace(/쇔/g, "swaem");
syl = syl.replace(/쇗/g, "swaes");
syl = syl.replace(/쇘/g, "swaess");
syl = syl.replace(/쇠/g, "soe");
syl = syl.replace(/쇤/g, "soen");
syl = syl.replace(/쇨/g, "soel");
syl = syl.replace(/쇰/g, "soem");
syl = syl.replace(/쇱/g, "soeb");
syl = syl.replace(/쇳/g, "soes");
syl = syl.replace(/쇼/g, "syo");
syl = syl.replace(/쇽/g, "syok");
syl = syl.replace(/숀/g, "syon");
syl = syl.replace(/숄/g, "syol");
syl = syl.replace(/숌/g, "syom");
syl = syl.replace(/숍/g, "syob");
syl = syl.replace(/숏/g, "syos");
syl = syl.replace(/숑/g, "syong");
syl = syl.replace(/수/g, "su");
syl = syl.replace(/숙/g, "suk");
syl = syl.replace(/순/g, "sun");
syl = syl.replace(/숟/g, "sud");
syl = syl.replace(/술/g, "sul");
syl = syl.replace(/숨/g, "sum");
syl = syl.replace(/숩/g, "sub");
syl = syl.replace(/숫/g, "sus");
syl = syl.replace(/숭/g, "sung");
syl = syl.replace(/숯/g, "such");
syl = syl.replace(/숱/g, "sut");
syl = syl.replace(/숲/g, "sup");
syl = syl.replace(/숴/g, "sweo");
syl = syl.replace(/쉈/g, "sweoss");
syl = syl.replace(/쉐/g, "swe");
syl = syl.replace(/쉑/g, "swek");
syl = syl.replace(/쉔/g, "swen");
syl = syl.replace(/쉘/g, "swel");
syl = syl.replace(/쉠/g, "swem");
syl = syl.replace(/쉥/g, "sweng");
syl = syl.replace(/쉬/g, "shwi");
syl = syl.replace(/쉭/g, "shwik");
syl = syl.replace(/쉰/g, "shwin");
syl = syl.replace(/쉴/g, "shwil");
syl = syl.replace(/쉼/g, "shwim");
syl = syl.replace(/쉽/g, "shwip");
syl = syl.replace(/쉿/g, "shwis");
syl = syl.replace(/슁/g, "shwing");
syl = syl.replace(/슈/g, "syu");
syl = syl.replace(/슉/g, "syuk");
syl = syl.replace(/슐/g, "syul");
syl = syl.replace(/슘/g, "syum");
syl = syl.replace(/슛/g, "syus");
syl = syl.replace(/슝/g, "syung");
syl = syl.replace(/스/g, "seu");
syl = syl.replace(/슥/g, "seuk");
syl = syl.replace(/슨/g, "seun");
syl = syl.replace(/슬/g, "seul");
syl = syl.replace(/슭/g, "seulk");
syl = syl.replace(/슴/g, "seum");
syl = syl.replace(/습/g, "seub");
syl = syl.replace(/슷/g, "seus");
syl = syl.replace(/승/g, "seung");
syl = syl.replace(/시/g, "shi");
syl = syl.replace(/식/g, "shik");
syl = syl.replace(/신/g, "shin");
syl = syl.replace(/싣/g, "shid");
syl = syl.replace(/실/g, "shil");
syl = syl.replace(/싫/g, "shilh");
syl = syl.replace(/심/g, "shim");
syl = syl.replace(/십/g, "ship");
syl = syl.replace(/싯/g, "shis");
syl = syl.replace(/싱/g, "shing");
syl = syl.replace(/싶/g, "ship");
syl = syl.replace(/싸/g, "ssa");
syl = syl.replace(/싹/g, "ssak");
syl = syl.replace(/싻/g, "ssaks");
syl = syl.replace(/싼/g, "ssan");
syl = syl.replace(/쌀/g, "ssal");
syl = syl.replace(/쌈/g, "ssam");
syl = syl.replace(/쌉/g, "ssap");
syl = syl.replace(/쌌/g, "ssass");
syl = syl.replace(/쌍/g, "ssang");
syl = syl.replace(/쌓/g, "ssah");
syl = syl.replace(/쌔/g, "ssae");
syl = syl.replace(/쌕/g, "ssaek");
syl = syl.replace(/쌘/g, "ssaen");
syl = syl.replace(/쌜/g, "ssael");
syl = syl.replace(/쌤/g, "ssaem");
syl = syl.replace(/쌥/g, "ssaep");
syl = syl.replace(/쌨/g, "ssaess");
syl = syl.replace(/쌩/g, "ssaeng");
syl = syl.replace(/썅/g, "ssyang");
syl = syl.replace(/써/g, "sseo");
syl = syl.replace(/썩/g, "sseok");
syl = syl.replace(/썬/g, "sseon");
syl = syl.replace(/썰/g, "sseol");
syl = syl.replace(/썲/g, "sseolm");
syl = syl.replace(/썸/g, "sseom");
syl = syl.replace(/썹/g, "sseop");
syl = syl.replace(/썼/g, "sseoss");
syl = syl.replace(/썽/g, "sseong");
syl = syl.replace(/쎄/g, "sse");
syl = syl.replace(/쎈/g, "ssen");
syl = syl.replace(/쎌/g, "ssel");
syl = syl.replace(/쏀/g, "ssyen");
syl = syl.replace(/쏘/g, "sso");
syl = syl.replace(/쏙/g, "ssok");
syl = syl.replace(/쏜/g, "sson");
syl = syl.replace(/쏟/g, "ssod");
syl = syl.replace(/쏠/g, "ssol");
syl = syl.replace(/쏢/g, "ssolm");
syl = syl.replace(/쏨/g, "ssom");
syl = syl.replace(/쏩/g, "ssop");
syl = syl.replace(/쏭/g, "ssong");
syl = syl.replace(/쏴/g, "sswa");
syl = syl.replace(/쏵/g, "sswak");
syl = syl.replace(/쏸/g, "sswan");
syl = syl.replace(/쐈/g, "sswass");
syl = syl.replace(/쐐/g, "sswae");
syl = syl.replace(/쐤/g, "sswaess");
syl = syl.replace(/쐬/g, "ssoe");
syl = syl.replace(/쐰/g, "ssoen");
syl = syl.replace(/쐴/g, "ssoel");
syl = syl.replace(/쐼/g, "ssoem");
syl = syl.replace(/쐽/g, "ssoeb");
syl = syl.replace(/쑈/g, "ssyo");
syl = syl.replace(/쑤/g, "ssu");
syl = syl.replace(/쑥/g, "ssuk");
syl = syl.replace(/쑨/g, "ssun");
syl = syl.replace(/쑬/g, "ssul");
syl = syl.replace(/쑴/g, "ssum");
syl = syl.replace(/쑵/g, "ssub");
syl = syl.replace(/쑹/g, "ssung");
syl = syl.replace(/쒀/g, "ssweo");
syl = syl.replace(/쒔/g, "ssweoss");
syl = syl.replace(/쒜/g, "sswe");
syl = syl.replace(/쒸/g, "sswi");
syl = syl.replace(/쒼/g, "sswin");
syl = syl.replace(/쓩/g, "ssyung");
syl = syl.replace(/쓰/g, "sseu");
syl = syl.replace(/쓱/g, "sseuk");
syl = syl.replace(/쓴/g, "sseun");
syl = syl.replace(/쓸/g, "sseul");
syl = syl.replace(/쓺/g, "sseulm");
syl = syl.replace(/쓿/g, "sseulh");
syl = syl.replace(/씀/g, "sseum");
syl = syl.replace(/씁/g, "sseub");
syl = syl.replace(/씌/g, "ssi");
syl = syl.replace(/씐/g, "ssuin");
syl = syl.replace(/씔/g, "ssuil");
syl = syl.replace(/씜/g, "ssuim");
syl = syl.replace(/씨/g, "ssi");
syl = syl.replace(/씩/g, "ssik");
syl = syl.replace(/씬/g, "ssin");
syl = syl.replace(/씰/g, "ssil");
syl = syl.replace(/씸/g, "ssim");
syl = syl.replace(/씹/g, "ssib");
syl = syl.replace(/씻/g, "ssis");
syl = syl.replace(/씽/g, "ssing");
syl = syl.replace(/아/g, "a");
syl = syl.replace(/악/g, "ak");
syl = syl.replace(/안/g, "an");
syl = syl.replace(/앉/g, "anj");
syl = syl.replace(/않/g, "anh");
syl = syl.replace(/알/g, "al");
syl = syl.replace(/앍/g, "alk");
syl = syl.replace(/앎/g, "alm");
syl = syl.replace(/앓/g, "alh");
syl = syl.replace(/암/g, "am");
syl = syl.replace(/압/g, "ab");
syl = syl.replace(/앗/g, "as");
syl = syl.replace(/았/g, "ass");
syl = syl.replace(/앙/g, "ang");
syl = syl.replace(/앝/g, "at");
syl = syl.replace(/앞/g, "ap");
syl = syl.replace(/애/g, "ae");
syl = syl.replace(/액/g, "aek");
syl = syl.replace(/앤/g, "aen");
syl = syl.replace(/앨/g, "ael");
syl = syl.replace(/앰/g, "aem");
syl = syl.replace(/앱/g, "aeb");
syl = syl.replace(/앳/g, "aes");
syl = syl.replace(/앴/g, "aess");
syl = syl.replace(/앵/g, "aeng");
syl = syl.replace(/야/g, "ya");
syl = syl.replace(/약/g, "yak");
syl = syl.replace(/얀/g, "yan");
syl = syl.replace(/얄/g, "yal");
syl = syl.replace(/얇/g, "yalb");
syl = syl.replace(/얌/g, "yam");
syl = syl.replace(/얍/g, "yab");
syl = syl.replace(/얏/g, "yas");
syl = syl.replace(/양/g, "yang");
syl = syl.replace(/얕/g, "yat");
syl = syl.replace(/얗/g, "yah");
syl = syl.replace(/얘/g, "yae");
syl = syl.replace(/얜/g, "yaen");
syl = syl.replace(/얠/g, "yael");
syl = syl.replace(/얩/g, "yaeb");
syl = syl.replace(/어/g, "eo");
syl = syl.replace(/억/g, "eok");
syl = syl.replace(/언/g, "eon");
syl = syl.replace(/얹/g, "eonj");
syl = syl.replace(/얻/g, "eod");
syl = syl.replace(/얼/g, "eol");
syl = syl.replace(/얽/g, "eolk");
syl = syl.replace(/얾/g, "eolm");
syl = syl.replace(/엄/g, "eom");
syl = syl.replace(/업/g, "eop");
syl = syl.replace(/없/g, "eobs");
syl = syl.replace(/엇/g, "eos");
syl = syl.replace(/었/g, "eoss");
syl = syl.replace(/엉/g, "eong");
syl = syl.replace(/엊/g, "eoj");
syl = syl.replace(/엌/g, "eok");
syl = syl.replace(/엎/g, "eop");
syl = syl.replace(/에/g, "e");
syl = syl.replace(/엑/g, "ek");
syl = syl.replace(/엔/g, "en");
syl = syl.replace(/엘/g, "el");
syl = syl.replace(/엠/g, "em");
syl = syl.replace(/엡/g, "eb");
syl = syl.replace(/엣/g, "es");
syl = syl.replace(/엥/g, "eng");
syl = syl.replace(/여/g, "yeo");
syl = syl.replace(/역/g, "yeok");
syl = syl.replace(/엮/g, "yeokk");
syl = syl.replace(/연/g, "yeon");
syl = syl.replace(/열/g, "yeol");
syl = syl.replace(/엶/g, "yeolm");
syl = syl.replace(/엷/g, "yeolb");
syl = syl.replace(/염/g, "yeom");
syl = syl.replace(/엽/g, "yeob");
syl = syl.replace(/엾/g, "yeobs");
syl = syl.replace(/엿/g, "yeos");
syl = syl.replace(/였/g, "yeoss");
syl = syl.replace(/영/g, "yeong");
syl = syl.replace(/옅/g, "yeot");
syl = syl.replace(/옆/g, "yeop");
syl = syl.replace(/옇/g, "yeoh");
syl = syl.replace(/예/g, "ye");
syl = syl.replace(/옌/g, "yen");
syl = syl.replace(/옐/g, "yel");
syl = syl.replace(/옘/g, "yem");
syl = syl.replace(/옙/g, "yeb");
syl = syl.replace(/옛/g, "yes");
syl = syl.replace(/옜/g, "yess");
syl = syl.replace(/오/g, "o");
syl = syl.replace(/옥/g, "ok");
syl = syl.replace(/온/g, "on");
syl = syl.replace(/올/g, "ol");
syl = syl.replace(/옭/g, "olk");
syl = syl.replace(/옮/g, "olm");
syl = syl.replace(/옰/g, "ols");
syl = syl.replace(/옳/g, "olh");
syl = syl.replace(/옴/g, "om");
syl = syl.replace(/옵/g, "ob");
syl = syl.replace(/옷/g, "os");
syl = syl.replace(/옹/g, "ong");
syl = syl.replace(/옻/g, "och");
syl = syl.replace(/와/g, "wa");
syl = syl.replace(/왁/g, "wak");
syl = syl.replace(/완/g, "wan");
syl = syl.replace(/왈/g, "wal");
syl = syl.replace(/왐/g, "wam");
syl = syl.replace(/왑/g, "wab");
syl = syl.replace(/왓/g, "was");
syl = syl.replace(/왔/g, "wass");
syl = syl.replace(/왕/g, "wang");
syl = syl.replace(/왜/g, "wae");
syl = syl.replace(/왤/g, "wael");	
syl = syl.replace(/왝/g, "waek");
syl = syl.replace(/왠/g, "waen");
syl = syl.replace(/왬/g, "waem");
syl = syl.replace(/왯/g, "waes");
syl = syl.replace(/왱/g, "waeng");
syl = syl.replace(/외/g, "oe");
syl = syl.replace(/왹/g, "oek");
syl = syl.replace(/왼/g, "oen");
syl = syl.replace(/욀/g, "oel");
syl = syl.replace(/욈/g, "oem");
syl = syl.replace(/욉/g, "oeb");
syl = syl.replace(/욋/g, "oes");
syl = syl.replace(/욍/g, "oeng");
syl = syl.replace(/요/g, "yo");
syl = syl.replace(/욕/g, "yok");
syl = syl.replace(/욘/g, "yon");
syl = syl.replace(/욜/g, "yol");
syl = syl.replace(/욤/g, "yom");
syl = syl.replace(/욥/g, "yob");
syl = syl.replace(/욧/g, "yos");
syl = syl.replace(/용/g, "yong");
syl = syl.replace(/우/g, "u");
syl = syl.replace(/욱/g, "uk");
syl = syl.replace(/운/g, "un");
syl = syl.replace(/울/g, "ul");
syl = syl.replace(/욹/g, "ulk");
syl = syl.replace(/욺/g, "ulm");
syl = syl.replace(/움/g, "um");
syl = syl.replace(/웁/g, "ub");
syl = syl.replace(/웃/g, "us");
syl = syl.replace(/웅/g, "ung");
syl = syl.replace(/워/g, "weo");
syl = syl.replace(/웍/g, "weok");
syl = syl.replace(/원/g, "weon");
syl = syl.replace(/월/g, "weol");
syl = syl.replace(/웜/g, "weom");
syl = syl.replace(/웝/g, "weob");
syl = syl.replace(/웠/g, "weoss");
syl = syl.replace(/웡/g, "weong");
syl = syl.replace(/웨/g, "we");
syl = syl.replace(/웩/g, "wek");
syl = syl.replace(/웬/g, "wen");
syl = syl.replace(/웰/g, "wel");
syl = syl.replace(/웸/g, "wem");
syl = syl.replace(/웹/g, "web");
syl = syl.replace(/웽/g, "weng");
syl = syl.replace(/위/g, "wi");
syl = syl.replace(/윅/g, "wik");
syl = syl.replace(/윈/g, "win");
syl = syl.replace(/윌/g, "wil");
syl = syl.replace(/윔/g, "wim");
syl = syl.replace(/윕/g, "wib");
syl = syl.replace(/윗/g, "wis");
syl = syl.replace(/윙/g, "wing");
syl = syl.replace(/유/g, "yu");
syl = syl.replace(/육/g, "yuk");
syl = syl.replace(/윤/g, "yun");
syl = syl.replace(/율/g, "yul");
syl = syl.replace(/윰/g, "yum");
syl = syl.replace(/윱/g, "yub");
syl = syl.replace(/윳/g, "yus");
syl = syl.replace(/융/g, "yung");
syl = syl.replace(/윷/g, "yuch");
syl = syl.replace(/으/g, "eu");
syl = syl.replace(/윽/g, "euk");
syl = syl.replace(/은/g, "eun");
syl = syl.replace(/을/g, "eul");
syl = syl.replace(/읊/g, "eulp");
syl = syl.replace(/음/g, "eum");
syl = syl.replace(/읍/g, "eub");
syl = syl.replace(/읏/g, "eus");
syl = syl.replace(/응/g, "eung");
syl = syl.replace(/읒/g, "euj");
syl = syl.replace(/읓/g, "euch");
syl = syl.replace(/읔/g, "euk");
syl = syl.replace(/읕/g, "eut");
syl = syl.replace(/읖/g, "eup");
syl = syl.replace(/읗/g, "euh");
syl = syl.replace(/의/g, "ui");
syl = syl.replace(/읜/g, "in");
syl = syl.replace(/읠/g, "il");
syl = syl.replace(/읨/g, "im");
syl = syl.replace(/읫/g, "is");
syl = syl.replace(/이/g, "i");
syl = syl.replace(/익/g, "ik");
syl = syl.replace(/잌/g, "ik");
syl = syl.replace(/인/g, "in");
syl = syl.replace(/일/g, "il");
syl = syl.replace(/읽/g, "ilk");
syl = syl.replace(/읾/g, "ilm");
syl = syl.replace(/잃/g, "ilh");
syl = syl.replace(/임/g, "im");
syl = syl.replace(/입/g, "ip");
syl = syl.replace(/잇/g, "is");
syl = syl.replace(/있/g, "iss");
syl = syl.replace(/잉/g, "ing");
syl = syl.replace(/잊/g, "ij");
syl = syl.replace(/잎/g, "ip");
syl = syl.replace(/자/g, "ja");
syl = syl.replace(/작/g, "jak");
syl = syl.replace(/잔/g, "jan");
syl = syl.replace(/잖/g, "janh");
syl = syl.replace(/잗/g, "jad");
syl = syl.replace(/잘/g, "jal");
syl = syl.replace(/잚/g, "jalm");
syl = syl.replace(/잠/g, "jam");
syl = syl.replace(/잡/g, "jab");
syl = syl.replace(/잣/g, "jas");
syl = syl.replace(/잤/g, "jass");
syl = syl.replace(/장/g, "jang");
syl = syl.replace(/잦/g, "jaj");
syl = syl.replace(/재/g, "jae");
syl = syl.replace(/잭/g, "jaek");
syl = syl.replace(/잰/g, "jaen");
syl = syl.replace(/잴/g, "jael");
syl = syl.replace(/잼/g, "jaem");
syl = syl.replace(/잽/g, "jaeb");
syl = syl.replace(/잿/g, "jaes");
syl = syl.replace(/쟀/g, "jaess");
syl = syl.replace(/쟁/g, "jaeng");
syl = syl.replace(/쟈/g, "jya");
syl = syl.replace(/쟉/g, "jyak");
syl = syl.replace(/쟌/g, "jyan");
syl = syl.replace(/쟎/g, "jyanh");
syl = syl.replace(/쟐/g, "jyal");
syl = syl.replace(/쟘/g, "jyam");
syl = syl.replace(/쟝/g, "jyang");
syl = syl.replace(/쟤/g, "jyae");
syl = syl.replace(/쟨/g, "jyaen");
syl = syl.replace(/쟬/g, "jyael");
syl = syl.replace(/저/g, "jeo");
syl = syl.replace(/적/g, "jeok");
syl = syl.replace(/전/g, "jeon");
syl = syl.replace(/절/g, "jeol");
syl = syl.replace(/젊/g, "jeolm");
syl = syl.replace(/점/g, "jeom");
syl = syl.replace(/접/g, "jeob");
syl = syl.replace(/젓/g, "jeos");
syl = syl.replace(/정/g, "jeong");
syl = syl.replace(/젖/g, "jeoj");
syl = syl.replace(/제/g, "je");
syl = syl.replace(/젝/g, "jek");
syl = syl.replace(/젠/g, "jen");
syl = syl.replace(/젤/g, "jel");
syl = syl.replace(/젬/g, "jem");
syl = syl.replace(/젭/g, "jeb");
syl = syl.replace(/젯/g, "jes");
syl = syl.replace(/젱/g, "jeng");
syl = syl.replace(/져/g, "jyeo");
syl = syl.replace(/젼/g, "jyeon");
syl = syl.replace(/졀/g, "jyeol");
syl = syl.replace(/졈/g, "jyeom");
syl = syl.replace(/졉/g, "jyeob");
syl = syl.replace(/졌/g, "jyeoss");
syl = syl.replace(/졍/g, "jyeong");
syl = syl.replace(/졔/g, "jye");
syl = syl.replace(/조/g, "jo");
syl = syl.replace(/족/g, "jok");
syl = syl.replace(/존/g, "jon");
syl = syl.replace(/졸/g, "jol");
syl = syl.replace(/졺/g, "jolm");
syl = syl.replace(/좀/g, "jom");
syl = syl.replace(/좁/g, "job");
syl = syl.replace(/좃/g, "jos");
syl = syl.replace(/종/g, "jong");
syl = syl.replace(/좆/g, "joj");
syl = syl.replace(/좇/g, "joch");
syl = syl.replace(/좋/g, "joh");
syl = syl.replace(/좌/g, "jwa");
syl = syl.replace(/좍/g, "jwak");
syl = syl.replace(/좔/g, "jwal");
syl = syl.replace(/좝/g, "jwab");
syl = syl.replace(/좟/g, "jwas");
syl = syl.replace(/좡/g, "jwang");
syl = syl.replace(/좨/g, "jwae");
syl = syl.replace(/좼/g, "jwaess");
syl = syl.replace(/좽/g, "jwaeng");
syl = syl.replace(/죄/g, "joe");
syl = syl.replace(/죈/g, "joen");
syl = syl.replace(/죌/g, "joel");
syl = syl.replace(/죔/g, "joem");
syl = syl.replace(/죕/g, "joeb");
syl = syl.replace(/죗/g, "joes");
syl = syl.replace(/죙/g, "joeng");
syl = syl.replace(/죠/g, "jyo");
syl = syl.replace(/죡/g, "jyok");
syl = syl.replace(/죤/g, "jyon");
syl = syl.replace(/죵/g, "jyong");
syl = syl.replace(/주/g, "ju");
syl = syl.replace(/죽/g, "juk");
syl = syl.replace(/준/g, "jun");
syl = syl.replace(/줄/g, "jul");
syl = syl.replace(/줅/g, "julk");
syl = syl.replace(/줆/g, "julm");
syl = syl.replace(/줌/g, "jum");
syl = syl.replace(/줍/g, "jub");
syl = syl.replace(/줏/g, "jus");
syl = syl.replace(/중/g, "jung");
syl = syl.replace(/줘/g, "jweo");
syl = syl.replace(/줬/g, "jweoss");
syl = syl.replace(/줴/g, "jwe");
syl = syl.replace(/쥐/g, "jwi");
syl = syl.replace(/쥑/g, "jwik");
syl = syl.replace(/쥔/g, "jwin");
syl = syl.replace(/쥘/g, "jwil");
syl = syl.replace(/쥠/g, "jwim");
syl = syl.replace(/쥡/g, "jwib");
syl = syl.replace(/쥣/g, "jwis");
syl = syl.replace(/쥬/g, "jyu");
syl = syl.replace(/쥰/g, "jyun");
syl = syl.replace(/쥴/g, "jyul");
syl = syl.replace(/쥼/g, "jyum");
syl = syl.replace(/즈/g, "jeu");
syl = syl.replace(/즉/g, "jeuk");
syl = syl.replace(/즌/g, "jeun");
syl = syl.replace(/즐/g, "jeul");
syl = syl.replace(/즘/g, "jeum");
syl = syl.replace(/즙/g, "jeub");
syl = syl.replace(/즛/g, "jeus");
syl = syl.replace(/증/g, "jeung");
syl = syl.replace(/지/g, "ji");
syl = syl.replace(/직/g, "jik");
syl = syl.replace(/진/g, "jin");
syl = syl.replace(/짇/g, "jid");
syl = syl.replace(/질/g, "jil");
syl = syl.replace(/짊/g, "jilm");
syl = syl.replace(/짐/g, "jim");
syl = syl.replace(/집/g, "jib");
syl = syl.replace(/짓/g, "jis");
syl = syl.replace(/징/g, "jing");
syl = syl.replace(/짖/g, "jij");
syl = syl.replace(/짙/g, "jit");
syl = syl.replace(/짚/g, "jip");
syl = syl.replace(/짜/g, "jja");
syl = syl.replace(/짝/g, "jjak");
syl = syl.replace(/짠/g, "jjan");
syl = syl.replace(/짢/g, "jjanh");
syl = syl.replace(/짤/g, "jjal");
syl = syl.replace(/짧/g, "jjalb");
syl = syl.replace(/짬/g, "jjam");
syl = syl.replace(/짭/g, "jjab");
syl = syl.replace(/짯/g, "jjas");
syl = syl.replace(/짰/g, "jjass");
syl = syl.replace(/짱/g, "jjang");
syl = syl.replace(/째/g, "jjae");
syl = syl.replace(/짹/g, "jjaek");
syl = syl.replace(/짼/g, "jjaen");
syl = syl.replace(/쨀/g, "jjael");
syl = syl.replace(/쨈/g, "jjaem");
syl = syl.replace(/쨉/g, "jjaeb");
syl = syl.replace(/쨋/g, "jjaes");
syl = syl.replace(/쨌/g, "jjaess");
syl = syl.replace(/쨍/g, "jjaeng");
syl = syl.replace(/쨔/g, "jjya");
syl = syl.replace(/쨘/g, "jjyan");
syl = syl.replace(/쨩/g, "jjyang");
syl = syl.replace(/쩌/g, "jjeo");
syl = syl.replace(/쩍/g, "jjeok");
syl = syl.replace(/쩐/g, "jjeon");
syl = syl.replace(/쩔/g, "jjeol");
syl = syl.replace(/쩜/g, "jjeom");
syl = syl.replace(/쩝/g, "jjeob");
syl = syl.replace(/쩟/g, "jjeos");
syl = syl.replace(/쩠/g, "jjeoss");
syl = syl.replace(/쩡/g, "jjeong");
syl = syl.replace(/쩨/g, "jje");
syl = syl.replace(/쩽/g, "jjeng");
syl = syl.replace(/쪄/g, "jjyeo");
syl = syl.replace(/쪘/g, "jjyeoss");
syl = syl.replace(/쪼/g, "jjo");
syl = syl.replace(/쪽/g, "jjok");
syl = syl.replace(/쫀/g, "jjon");
syl = syl.replace(/쫄/g, "jjol");
syl = syl.replace(/쫌/g, "jjom");
syl = syl.replace(/쫍/g, "jjob");
syl = syl.replace(/쫏/g, "jjos");
syl = syl.replace(/쫑/g, "jjong");
syl = syl.replace(/쫓/g, "jjoch");
syl = syl.replace(/쫘/g, "jjwa");
syl = syl.replace(/쫙/g, "jjwak");
syl = syl.replace(/쫠/g, "jjwal");
syl = syl.replace(/쫬/g, "jjwass");
syl = syl.replace(/쫴/g, "jjwae");
syl = syl.replace(/쬈/g, "jjwaess");
syl = syl.replace(/쬐/g, "jjoe");
syl = syl.replace(/쬔/g, "jjoen");
syl = syl.replace(/쬘/g, "jjoel");
syl = syl.replace(/쬠/g, "jjoem");
syl = syl.replace(/쬡/g, "jjoeb");
syl = syl.replace(/쭁/g, "jjyong");
syl = syl.replace(/쭈/g, "jju");
syl = syl.replace(/쭉/g, "jjuk");
syl = syl.replace(/쭌/g, "jjun");
syl = syl.replace(/쭐/g, "jjul");
syl = syl.replace(/쭘/g, "jjum");
syl = syl.replace(/쭙/g, "jjub");
syl = syl.replace(/쭝/g, "jjung");
syl = syl.replace(/쭤/g, "jjweo");
syl = syl.replace(/쭸/g, "jjweoss");
syl = syl.replace(/쭹/g, "jjweong");
syl = syl.replace(/쮜/g, "jjwi");
syl = syl.replace(/쮸/g, "jjyu");
syl = syl.replace(/쯔/g, "jjeu");
syl = syl.replace(/쯤/g, "jjeum");
syl = syl.replace(/쯧/g, "jjeus");
syl = syl.replace(/쯩/g, "jjeung");
syl = syl.replace(/찌/g, "jji");
syl = syl.replace(/찍/g, "jjik");
syl = syl.replace(/찐/g, "jjin");
syl = syl.replace(/찔/g, "jjil");
syl = syl.replace(/찜/g, "jjim");
syl = syl.replace(/찝/g, "jjib");
syl = syl.replace(/찡/g, "jjing");
syl = syl.replace(/찢/g, "jjij");
syl = syl.replace(/찧/g, "jjih");
syl = syl.replace(/차/g, "cha");
syl = syl.replace(/착/g, "chak");
syl = syl.replace(/찬/g, "chan");
syl = syl.replace(/찮/g, "chanh");
syl = syl.replace(/찰/g, "chal");
syl = syl.replace(/참/g, "cham");
syl = syl.replace(/찹/g, "chab");
syl = syl.replace(/찻/g, "chas");
syl = syl.replace(/찼/g, "chass");
syl = syl.replace(/창/g, "chang");
syl = syl.replace(/찾/g, "chaj");
syl = syl.replace(/채/g, "chae");
syl = syl.replace(/책/g, "chaek");
syl = syl.replace(/챈/g, "chaen");
syl = syl.replace(/챌/g, "chael");
syl = syl.replace(/챔/g, "chaem");
syl = syl.replace(/챕/g, "chaeb");
syl = syl.replace(/챗/g, "chaes");
syl = syl.replace(/챘/g, "chaess");
syl = syl.replace(/챙/g, "chaeng");
syl = syl.replace(/챠/g, "chya");
syl = syl.replace(/챤/g, "chyan");
syl = syl.replace(/챦/g, "chyanh");
syl = syl.replace(/챨/g, "chyal");
syl = syl.replace(/챰/g, "chyam");
syl = syl.replace(/챵/g, "chyang");
syl = syl.replace(/처/g, "cheo");
syl = syl.replace(/척/g, "cheok");
syl = syl.replace(/천/g, "cheon");
syl = syl.replace(/철/g, "cheol");
syl = syl.replace(/첨/g, "cheom");
syl = syl.replace(/첩/g, "cheob");
syl = syl.replace(/첫/g, "cheos");
syl = syl.replace(/첬/g, "cheoss");
syl = syl.replace(/청/g, "cheong");
syl = syl.replace(/체/g, "che");
syl = syl.replace(/첵/g, "chek");
syl = syl.replace(/첸/g, "chen");
syl = syl.replace(/첼/g, "chel");
syl = syl.replace(/쳄/g, "chem");
syl = syl.replace(/쳅/g, "cheb");
syl = syl.replace(/쳇/g, "ches");
syl = syl.replace(/쳉/g, "cheng");
syl = syl.replace(/쳐/g, "chyeo");
syl = syl.replace(/쳔/g, "chyeon");
syl = syl.replace(/쳤/g, "chyeoss");
syl = syl.replace(/쳬/g, "chye");
syl = syl.replace(/쳰/g, "chyen");
syl = syl.replace(/촁/g, "chyeng");
syl = syl.replace(/초/g, "cho");
syl = syl.replace(/촉/g, "chok");
syl = syl.replace(/촌/g, "chon");
syl = syl.replace(/촐/g, "chol");
syl = syl.replace(/촘/g, "chom");
syl = syl.replace(/촙/g, "chob");
syl = syl.replace(/촛/g, "chos");
syl = syl.replace(/총/g, "chong");
syl = syl.replace(/촤/g, "chwa");
syl = syl.replace(/촨/g, "chwan");
syl = syl.replace(/촬/g, "chwal");
syl = syl.replace(/촹/g, "chwang");
syl = syl.replace(/최/g, "choe");
syl = syl.replace(/쵠/g, "choen");
syl = syl.replace(/쵤/g, "choel");
syl = syl.replace(/쵬/g, "choem");
syl = syl.replace(/쵭/g, "choeb");
syl = syl.replace(/쵯/g, "choes");
syl = syl.replace(/쵱/g, "choeng");
syl = syl.replace(/쵸/g, "chyo");
syl = syl.replace(/춈/g, "chyom");
syl = syl.replace(/추/g, "chu");
syl = syl.replace(/축/g, "chuk");
syl = syl.replace(/춘/g, "chun");
syl = syl.replace(/출/g, "chul");
syl = syl.replace(/춤/g, "chum");
syl = syl.replace(/춥/g, "chub");
syl = syl.replace(/춧/g, "chus");
syl = syl.replace(/충/g, "chung");
syl = syl.replace(/춰/g, "chweo");
syl = syl.replace(/췄/g, "chweoss");
syl = syl.replace(/췌/g, "chwe");
syl = syl.replace(/췐/g, "chwen");
syl = syl.replace(/취/g, "chwi");
syl = syl.replace(/췬/g, "chwin");
syl = syl.replace(/췰/g, "chwil");
syl = syl.replace(/췸/g, "chwim");
syl = syl.replace(/췹/g, "chwib");
syl = syl.replace(/췻/g, "chwis");
syl = syl.replace(/췽/g, "chwing");
syl = syl.replace(/츄/g, "chyu");
syl = syl.replace(/츈/g, "chyun");
syl = syl.replace(/츌/g, "chyul");
syl = syl.replace(/츔/g, "chyum");
syl = syl.replace(/츙/g, "chyung");
syl = syl.replace(/츠/g, "cheu");
syl = syl.replace(/측/g, "cheuk");
syl = syl.replace(/츤/g, "cheun");
syl = syl.replace(/츨/g, "cheul");
syl = syl.replace(/츰/g, "cheum");
syl = syl.replace(/츱/g, "cheub");
syl = syl.replace(/츳/g, "cheus");
syl = syl.replace(/층/g, "cheung");
syl = syl.replace(/치/g, "chi");
syl = syl.replace(/칙/g, "chik");
syl = syl.replace(/친/g, "chin");
syl = syl.replace(/칟/g, "chid");
syl = syl.replace(/칠/g, "chil");
syl = syl.replace(/칡/g, "chilk");
syl = syl.replace(/침/g, "chim");
syl = syl.replace(/칩/g, "chib");
syl = syl.replace(/칫/g, "chis");
syl = syl.replace(/칭/g, "ching");
syl = syl.replace(/카/g, "ka");
syl = syl.replace(/칵/g, "kak");
syl = syl.replace(/칸/g, "kan");
syl = syl.replace(/칼/g, "kal");
syl = syl.replace(/캄/g, "kam");
syl = syl.replace(/캅/g, "kab");
syl = syl.replace(/캇/g, "kas");
syl = syl.replace(/캉/g, "kang");
syl = syl.replace(/캐/g, "kae");
syl = syl.replace(/캑/g, "kaek");
syl = syl.replace(/캔/g, "kaen");
syl = syl.replace(/캘/g, "kael");
syl = syl.replace(/캠/g, "kaem");
syl = syl.replace(/캡/g, "kaeb");
syl = syl.replace(/캣/g, "kaes");
syl = syl.replace(/캤/g, "kaess");
syl = syl.replace(/캥/g, "kaeng");
syl = syl.replace(/캬/g, "kya");
syl = syl.replace(/캭/g, "kyak");
syl = syl.replace(/컁/g, "kyang");
syl = syl.replace(/커/g, "keo");
syl = syl.replace(/컥/g, "keok");
syl = syl.replace(/컨/g, "keon");
syl = syl.replace(/컫/g, "keod");
syl = syl.replace(/컬/g, "keol");
syl = syl.replace(/컴/g, "keom");
syl = syl.replace(/컵/g, "keob");
syl = syl.replace(/컷/g, "keos");
syl = syl.replace(/컸/g, "keoss");
syl = syl.replace(/컹/g, "keong");
syl = syl.replace(/케/g, "ke");
syl = syl.replace(/켁/g, "kek");
syl = syl.replace(/켄/g, "ken");
syl = syl.replace(/켈/g, "kel");
syl = syl.replace(/켐/g, "kem");
syl = syl.replace(/켑/g, "keb");
syl = syl.replace(/켓/g, "kes");
syl = syl.replace(/켕/g, "keng");
syl = syl.replace(/켜/g, "kyeo");
syl = syl.replace(/켠/g, "kyeon");
syl = syl.replace(/켤/g, "kyeol");
syl = syl.replace(/켬/g, "kyeom");
syl = syl.replace(/켭/g, "kyeob");
syl = syl.replace(/켯/g, "kyeos");
syl = syl.replace(/켰/g, "kyeoss");
syl = syl.replace(/켱/g, "kyeong");
syl = syl.replace(/켸/g, "kye");
syl = syl.replace(/코/g, "ko");
syl = syl.replace(/콕/g, "kok");
syl = syl.replace(/콘/g, "kon");
syl = syl.replace(/콜/g, "kol");
syl = syl.replace(/콤/g, "kom");
syl = syl.replace(/콥/g, "kob");
syl = syl.replace(/콧/g, "kos");
syl = syl.replace(/콩/g, "kong");
syl = syl.replace(/콰/g, "kwa");
syl = syl.replace(/콱/g, "kwak");
syl = syl.replace(/콴/g, "kwan");
syl = syl.replace(/콸/g, "kwal");
syl = syl.replace(/쾀/g, "kwam");
syl = syl.replace(/쾅/g, "kwang");
syl = syl.replace(/쾌/g, "kwae");
syl = syl.replace(/쾡/g, "kwaeng");
syl = syl.replace(/쾨/g, "koe");
syl = syl.replace(/쾰/g, "koel");
syl = syl.replace(/쿄/g, "kyo");
syl = syl.replace(/쿠/g, "ku");
syl = syl.replace(/쿡/g, "kuk");
syl = syl.replace(/쿤/g, "kun");
syl = syl.replace(/쿨/g, "kul");
syl = syl.replace(/쿰/g, "kum");
syl = syl.replace(/쿱/g, "kub");
syl = syl.replace(/쿳/g, "kus");
syl = syl.replace(/쿵/g, "kung");
syl = syl.replace(/쿼/g, "kweo");
syl = syl.replace(/퀀/g, "kweon");
syl = syl.replace(/퀄/g, "kweol");
syl = syl.replace(/퀑/g, "kweong");
syl = syl.replace(/퀘/g, "kwe");
syl = syl.replace(/퀭/g, "kweng");
syl = syl.replace(/퀴/g, "kwi");
syl = syl.replace(/퀵/g, "kwik");
syl = syl.replace(/퀸/g, "kwin");
syl = syl.replace(/퀼/g, "kwil");
syl = syl.replace(/큄/g, "kwim");
syl = syl.replace(/큅/g, "kwib");
syl = syl.replace(/큇/g, "kwis");
syl = syl.replace(/큉/g, "kwing");
syl = syl.replace(/큐/g, "kyu");
syl = syl.replace(/큔/g, "kyun");
syl = syl.replace(/큘/g, "kyul");
syl = syl.replace(/큠/g, "kyum");
syl = syl.replace(/크/g, "keu");
syl = syl.replace(/큭/g, "keuk");
syl = syl.replace(/큰/g, "keun");
syl = syl.replace(/클/g, "keul");
syl = syl.replace(/큼/g, "keum");
syl = syl.replace(/큽/g, "keub");
syl = syl.replace(/킁/g, "keung");
syl = syl.replace(/키/g, "ki");
syl = syl.replace(/킥/g, "kik");
syl = syl.replace(/킨/g, "kin");
syl = syl.replace(/킬/g, "kil");
syl = syl.replace(/킴/g, "kim");
syl = syl.replace(/킵/g, "kib");
syl = syl.replace(/킷/g, "kis");
syl = syl.replace(/킹/g, "king");
syl = syl.replace(/타/g, "ta");
syl = syl.replace(/탁/g, "tak");
syl = syl.replace(/탄/g, "tan");
syl = syl.replace(/탈/g, "tal");
syl = syl.replace(/탉/g, "talk");
syl = syl.replace(/탐/g, "tam");
syl = syl.replace(/탑/g, "tab");
syl = syl.replace(/탓/g, "tas");
syl = syl.replace(/탔/g, "tass");
syl = syl.replace(/탕/g, "tang");
syl = syl.replace(/태/g, "tae");
syl = syl.replace(/택/g, "taek");
syl = syl.replace(/탠/g, "taen");
syl = syl.replace(/탤/g, "tael");
syl = syl.replace(/탬/g, "taem");
syl = syl.replace(/탭/g, "taeb");
syl = syl.replace(/탯/g, "taes");
syl = syl.replace(/탰/g, "taess");
syl = syl.replace(/탱/g, "taeng");
syl = syl.replace(/탸/g, "tya");
syl = syl.replace(/턍/g, "tyang");
syl = syl.replace(/터/g, "teo");
syl = syl.replace(/턱/g, "teok");
syl = syl.replace(/턴/g, "teon");
syl = syl.replace(/털/g, "teol");
syl = syl.replace(/턺/g, "teolm");
syl = syl.replace(/텀/g, "teom");
syl = syl.replace(/텁/g, "teob");
syl = syl.replace(/텃/g, "teos");
syl = syl.replace(/텄/g, "teoss");
syl = syl.replace(/텅/g, "teong");
syl = syl.replace(/테/g, "te");
syl = syl.replace(/텍/g, "tek");
syl = syl.replace(/텐/g, "ten");
syl = syl.replace(/텔/g, "tel");
syl = syl.replace(/템/g, "tem");
syl = syl.replace(/텝/g, "teb");
syl = syl.replace(/텟/g, "tes");
syl = syl.replace(/텡/g, "teng");
syl = syl.replace(/텨/g, "tyeo");
syl = syl.replace(/텬/g, "tyeon");
syl = syl.replace(/텼/g, "tyeoss");
syl = syl.replace(/톄/g, "tye");
syl = syl.replace(/톈/g, "tyen");
syl = syl.replace(/토/g, "to");
syl = syl.replace(/톡/g, "tok");
syl = syl.replace(/톤/g, "ton");
syl = syl.replace(/톨/g, "tol");
syl = syl.replace(/톰/g, "tom");
syl = syl.replace(/톱/g, "tob");
syl = syl.replace(/톳/g, "tos");
syl = syl.replace(/통/g, "tong");
syl = syl.replace(/톺/g, "top");
syl = syl.replace(/톼/g, "twa");
syl = syl.replace(/퇀/g, "twan");
syl = syl.replace(/퇘/g, "twae");
syl = syl.replace(/퇴/g, "toe");
syl = syl.replace(/퇸/g, "toen");
syl = syl.replace(/툇/g, "toes");
syl = syl.replace(/툉/g, "toeng");
syl = syl.replace(/툐/g, "tyo");
syl = syl.replace(/투/g, "tu");
syl = syl.replace(/툭/g, "tuk");
syl = syl.replace(/툰/g, "tun");
syl = syl.replace(/툴/g, "tul");
syl = syl.replace(/툼/g, "tum");
syl = syl.replace(/툽/g, "tub");
syl = syl.replace(/툿/g, "tus");
syl = syl.replace(/퉁/g, "tung");
syl = syl.replace(/퉈/g, "tweo");
syl = syl.replace(/퉜/g, "tweoss");
syl = syl.replace(/퉤/g, "twe");
syl = syl.replace(/튀/g, "twi");
syl = syl.replace(/튁/g, "twik");
syl = syl.replace(/튄/g, "twin");
syl = syl.replace(/튈/g, "twil");
syl = syl.replace(/튐/g, "twim");
syl = syl.replace(/튑/g, "twib");
syl = syl.replace(/튕/g, "twing");
syl = syl.replace(/튜/g, "tyu");
syl = syl.replace(/튠/g, "tyun");
syl = syl.replace(/튤/g, "tyul");
syl = syl.replace(/튬/g, "tyum");
syl = syl.replace(/튱/g, "tyung");
syl = syl.replace(/트/g, "teu");
syl = syl.replace(/특/g, "teuk");
syl = syl.replace(/튼/g, "teun");
syl = syl.replace(/튿/g, "teud");
syl = syl.replace(/틀/g, "teul");
syl = syl.replace(/틂/g, "teulm");
syl = syl.replace(/틈/g, "teum");
syl = syl.replace(/틉/g, "teub");
syl = syl.replace(/틋/g, "teus");
syl = syl.replace(/틔/g, "ti");
syl = syl.replace(/틘/g, "tuin");
syl = syl.replace(/틜/g, "tuil");
syl = syl.replace(/틤/g, "tuim");
syl = syl.replace(/틥/g, "tuib");
syl = syl.replace(/티/g, "ti");
syl = syl.replace(/틱/g, "tik");
syl = syl.replace(/틴/g, "tin");
syl = syl.replace(/틸/g, "til");
syl = syl.replace(/팀/g, "tim");
syl = syl.replace(/팁/g, "tib");
syl = syl.replace(/팃/g, "tis");
syl = syl.replace(/팅/g, "ting");
syl = syl.replace(/파/g, "pa");
syl = syl.replace(/팍/g, "pak");
syl = syl.replace(/팎/g, "pakk");
syl = syl.replace(/판/g, "pan");
syl = syl.replace(/팔/g, "pal");
syl = syl.replace(/팖/g, "palm");
syl = syl.replace(/팜/g, "pam");
syl = syl.replace(/팝/g, "pab");
syl = syl.replace(/팟/g, "pas");
syl = syl.replace(/팠/g, "pass");
syl = syl.replace(/팡/g, "pang");
syl = syl.replace(/팥/g, "pat");
syl = syl.replace(/패/g, "pae");
syl = syl.replace(/팩/g, "paek");
syl = syl.replace(/팬/g, "paen");
syl = syl.replace(/팰/g, "pael");
syl = syl.replace(/팸/g, "paem");
syl = syl.replace(/팹/g, "paeb");
syl = syl.replace(/팻/g, "paes");
syl = syl.replace(/팼/g, "paess");
syl = syl.replace(/팽/g, "paeng");
syl = syl.replace(/퍄/g, "pya");
syl = syl.replace(/퍅/g, "pyak");
syl = syl.replace(/퍼/g, "peo");
syl = syl.replace(/퍽/g, "peok");
syl = syl.replace(/펀/g, "peon");
syl = syl.replace(/펄/g, "peol");
syl = syl.replace(/펌/g, "peom");
syl = syl.replace(/펍/g, "peob");
syl = syl.replace(/펏/g, "peos");
syl = syl.replace(/펐/g, "peoss");
syl = syl.replace(/펑/g, "peong");
syl = syl.replace(/페/g, "pe");
syl = syl.replace(/펙/g, "pek");
syl = syl.replace(/펜/g, "pen");
syl = syl.replace(/펠/g, "pel");
syl = syl.replace(/펨/g, "pem");
syl = syl.replace(/펩/g, "peb");
syl = syl.replace(/펫/g, "pes");
syl = syl.replace(/펭/g, "peng");
syl = syl.replace(/펴/g, "pyeo");
syl = syl.replace(/편/g, "pyeon");
syl = syl.replace(/펼/g, "pyeol");
syl = syl.replace(/폄/g, "pyeom");
syl = syl.replace(/폅/g, "pyeob");
syl = syl.replace(/폈/g, "pyeoss");
syl = syl.replace(/평/g, "pyeong");
syl = syl.replace(/폐/g, "pye");
syl = syl.replace(/폘/g, "pyel");
syl = syl.replace(/폡/g, "pyeb");
syl = syl.replace(/폣/g, "pyes");
syl = syl.replace(/포/g, "po");
syl = syl.replace(/폭/g, "pok");
syl = syl.replace(/폰/g, "pon");
syl = syl.replace(/폴/g, "pol");
syl = syl.replace(/폼/g, "pom");
syl = syl.replace(/폽/g, "pob");
syl = syl.replace(/폿/g, "pos");
syl = syl.replace(/퐁/g, "pong");
syl = syl.replace(/퐈/g, "pwa");
syl = syl.replace(/퐝/g, "pwang");
syl = syl.replace(/푀/g, "poe");
syl = syl.replace(/푄/g, "poen");
syl = syl.replace(/표/g, "pyo");
syl = syl.replace(/푠/g, "pyon");
syl = syl.replace(/푤/g, "pyol");
syl = syl.replace(/푭/g, "pyob");
syl = syl.replace(/푯/g, "pyos");
syl = syl.replace(/푸/g, "pu");
syl = syl.replace(/푹/g, "puk");
syl = syl.replace(/푼/g, "pun");
syl = syl.replace(/푿/g, "pud");
syl = syl.replace(/풀/g, "pul");
syl = syl.replace(/풂/g, "pulm");
syl = syl.replace(/품/g, "pum");
syl = syl.replace(/풉/g, "pub");
syl = syl.replace(/풋/g, "pus");
syl = syl.replace(/풍/g, "pung");
syl = syl.replace(/풔/g, "pweo");
syl = syl.replace(/풩/g, "pweong");
syl = syl.replace(/퓌/g, "pwi");
syl = syl.replace(/퓐/g, "pwin");
syl = syl.replace(/퓔/g, "pwil");
syl = syl.replace(/퓜/g, "pwim");
syl = syl.replace(/퓟/g, "pwis");
syl = syl.replace(/퓨/g, "pyu");
syl = syl.replace(/퓬/g, "pyun");
syl = syl.replace(/퓰/g, "pyul");
syl = syl.replace(/퓸/g, "pyum");
syl = syl.replace(/퓻/g, "pyus");
syl = syl.replace(/퓽/g, "pyung");
syl = syl.replace(/프/g, "peu");
syl = syl.replace(/픈/g, "peun");
syl = syl.replace(/플/g, "peul");
syl = syl.replace(/픔/g, "peum");
syl = syl.replace(/픕/g, "peub");
syl = syl.replace(/픗/g, "peus");
syl = syl.replace(/피/g, "pi");
syl = syl.replace(/픽/g, "pik");
syl = syl.replace(/핀/g, "pin");
syl = syl.replace(/필/g, "pil");
syl = syl.replace(/핌/g, "pim");
syl = syl.replace(/핍/g, "pib");
syl = syl.replace(/핏/g, "pis");
syl = syl.replace(/핑/g, "ping");
syl = syl.replace(/하/g, "ha");
syl = syl.replace(/학/g, "hak");
syl = syl.replace(/한/g, "han");
syl = syl.replace(/할/g, "hal");
syl = syl.replace(/핥/g, "halt");
syl = syl.replace(/함/g, "ham");
syl = syl.replace(/합/g, "hab");
syl = syl.replace(/핫/g, "has");
syl = syl.replace(/항/g, "hang");
syl = syl.replace(/해/g, "hae");
syl = syl.replace(/핵/g, "haek");
syl = syl.replace(/핸/g, "haen");
syl = syl.replace(/핼/g, "hael");
syl = syl.replace(/햄/g, "haem");
syl = syl.replace(/햅/g, "haeb");
syl = syl.replace(/햇/g, "haes");
syl = syl.replace(/했/g, "haess");
syl = syl.replace(/행/g, "haeng");
syl = syl.replace(/햐/g, "hya");
syl = syl.replace(/향/g, "hyang");
syl = syl.replace(/허/g, "heo");
syl = syl.replace(/헉/g, "heok");
syl = syl.replace(/헌/g, "heon");
syl = syl.replace(/헐/g, "heol");
syl = syl.replace(/헒/g, "heolm");
syl = syl.replace(/험/g, "heom");
syl = syl.replace(/헙/g, "heob");
syl = syl.replace(/헛/g, "heos");
syl = syl.replace(/헝/g, "heong");
syl = syl.replace(/헤/g, "he");
syl = syl.replace(/헥/g, "hek");
syl = syl.replace(/헨/g, "hen");
syl = syl.replace(/헬/g, "hel");
syl = syl.replace(/헴/g, "hem");
syl = syl.replace(/헵/g, "heb");
syl = syl.replace(/헷/g, "hes");
syl = syl.replace(/헹/g, "heng");
syl = syl.replace(/혀/g, "hyeo");
syl = syl.replace(/혁/g, "hyeok");
syl = syl.replace(/현/g, "hyeon");
syl = syl.replace(/혈/g, "hyeol");
syl = syl.replace(/혐/g, "hyeom");
syl = syl.replace(/협/g, "hyeob");
syl = syl.replace(/혓/g, "hyeos");
syl = syl.replace(/혔/g, "hyeoss");
syl = syl.replace(/형/g, "hyeong");
syl = syl.replace(/혜/g, "hye");
syl = syl.replace(/혠/g, "hyen");
syl = syl.replace(/혤/g, "hyel");
syl = syl.replace(/혭/g, "hyeb");
syl = syl.replace(/호/g, "ho");
syl = syl.replace(/혹/g, "hok");
syl = syl.replace(/혼/g, "hon");
syl = syl.replace(/홀/g, "hol");
syl = syl.replace(/홅/g, "holt");
syl = syl.replace(/홈/g, "hom");
syl = syl.replace(/홉/g, "hob");
syl = syl.replace(/홋/g, "hos");
syl = syl.replace(/홍/g, "hong");
syl = syl.replace(/홑/g, "hot");
syl = syl.replace(/화/g, "hwa");
syl = syl.replace(/확/g, "hwak");
syl = syl.replace(/환/g, "hwan");
syl = syl.replace(/활/g, "hwal");
syl = syl.replace(/홧/g, "hwas");
syl = syl.replace(/황/g, "hwang");
syl = syl.replace(/홰/g, "hwae");
syl = syl.replace(/홱/g, "hwaek");
syl = syl.replace(/홴/g, "hwaen");
syl = syl.replace(/횃/g, "hwaes");
syl = syl.replace(/횅/g, "hwaeng");
syl = syl.replace(/회/g, "hoe");
syl = syl.replace(/획/g, "hoek");
syl = syl.replace(/횐/g, "hoen");
syl = syl.replace(/횔/g, "hoel");
syl = syl.replace(/횝/g, "hoeb");
syl = syl.replace(/횟/g, "hoes");
syl = syl.replace(/횡/g, "hoeng");
syl = syl.replace(/효/g, "hyo");
syl = syl.replace(/횬/g, "hyon");
syl = syl.replace(/횰/g, "hyol");
syl = syl.replace(/횹/g, "hyob");
syl = syl.replace(/횻/g, "hyos");
syl = syl.replace(/후/g, "hu");
syl = syl.replace(/훅/g, "huk");
syl = syl.replace(/훈/g, "hun");
syl = syl.replace(/훌/g, "hul");
syl = syl.replace(/훑/g, "hult");
syl = syl.replace(/훔/g, "hum");
syl = syl.replace(/훗/g, "hus");
syl = syl.replace(/훙/g, "hung");
syl = syl.replace(/훠/g, "hweo");
syl = syl.replace(/훤/g, "hweon");
syl = syl.replace(/훨/g, "hweol");
syl = syl.replace(/훰/g, "hweom");
syl = syl.replace(/훵/g, "hweong");
syl = syl.replace(/훼/g, "hwe");
syl = syl.replace(/훽/g, "hwek");
syl = syl.replace(/휀/g, "hwen");
syl = syl.replace(/휄/g, "hwel");
syl = syl.replace(/휑/g, "hweng");
syl = syl.replace(/휘/g, "hwi");
syl = syl.replace(/휙/g, "hwik");
syl = syl.replace(/휜/g, "hwin");
syl = syl.replace(/휠/g, "hwil");
syl = syl.replace(/휨/g, "hwim");
syl = syl.replace(/휩/g, "hwib");
syl = syl.replace(/휫/g, "hwis");
syl = syl.replace(/휭/g, "hwing");
syl = syl.replace(/휴/g, "hyu");
syl = syl.replace(/휵/g, "hyuk");
syl = syl.replace(/휸/g, "hyun");
syl = syl.replace(/휼/g, "hyul");
syl = syl.replace(/흄/g, "hyum");
syl = syl.replace(/흇/g, "hyus");
syl = syl.replace(/흉/g, "hyung");
syl = syl.replace(/흐/g, "heu");
syl = syl.replace(/흑/g, "heuk");
syl = syl.replace(/흔/g, "heun");
syl = syl.replace(/흖/g, "heunh");
syl = syl.replace(/흗/g, "heud");
syl = syl.replace(/흘/g, "heul");
syl = syl.replace(/흙/g, "heulk");
syl = syl.replace(/흠/g, "heum");
syl = syl.replace(/흡/g, "heub");
syl = syl.replace(/흣/g, "heus");
syl = syl.replace(/흥/g, "heung");
syl = syl.replace(/흩/g, "heut");
syl = syl.replace(/희/g, "hi");
syl = syl.replace(/흰/g, "hin");
syl = syl.replace(/흴/g, "hil");
syl = syl.replace(/흼/g, "him");
syl = syl.replace(/흽/g, "hib");
syl = syl.replace(/힁/g, "hing");
syl = syl.replace(/히/g, "hi");
syl = syl.replace(/힉/g, "hik");
syl = syl.replace(/힌/g, "hin");
syl = syl.replace(/힐/g, "hil");
syl = syl.replace(/힘/g, "him");
syl = syl.replace(/힙/g, "hib");
syl = syl.replace(/힛/g, "his");
syl = syl.replace(/힝/g, "hing");

syl = syl.replace(/si/g, "shi");

// Consonant followed by a vowel
// ㄱ   ㄴ ㄷ    ㄹ  ㅁ  ㅂ   ㅅ ㅈ  ㅊ ㅋ  ㅌ ㅍ ㅎ
// g/k  n  d/t  r/l  m  b/p  s  j  ch  k  t  p  h

// ㅏ ㅓ  ㅗ  ㅜ  ㅡ  ㅣ ㅐ  ㅔ  ㅚ  ㅟ  ㅢ   ㅑ   ㅕ   ㅛ  ㅠ  ㅒ  ㅖ
// a  eo  o   u  eu  i  ae  e  oe  ui  eui  ya	yeo  yo  yu yae  ye

// ㄹ sound shifts over to the next syllable, l becomes r
var find = syl.match(/[aeiou]l[aeoiuy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/l/g, "r"));
	}
}

//  ㄱ after and followed by a vowel, k becomes g
var find = syl.match(/[aeiou]k[aeoiuy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/k/g, "g"));
	}
}

var find = syl.match(/[aeiou]k[^aeoiuy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/k/g, "k"));
	}
}

//  ㅂ + ㅁ = ㅁㅁ
var find = syl.match(/[aeiouy]bm[aeoiuy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/bm/g, "mm"));
	}
}

// ㅂㄴ = ㅁㄴ
var find = syl.match(/[aeiouy]bn[aeoiuy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/bn/g, "mn"));
	}
}

// ㅎ is silent,
var find = syl.match(/[mjn][eoa]h/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/h/g, ""));
	}
}

// ㅌ + 이 = 치
//var find = syl.match(/[aeiouy]t[i]/g);
//if (find !== null) {
//	console.log(find);
//	for (i = 0; i < find.length; i++) {
//   		syl = syl.replace(find[i], find[i].replace(/t/g, "ch"));
//	}
//}

// ㄷ + 이 = 지, ㄷ batchim only followed by vowel
//var find = syl.match(/[jsbmdnk]ad[i]/g);
//if (find !== null) {
//	console.log(find);
//	for (i = 0; i < find.length; i++) {
//   		syl = syl.replace(find[i], find[i].replace(/ad/g, "aj"));
//	}
//}


// ㄷ + ㅎ followed by y or i, makes ㄷ = ㅊ
var find = syl.match(/[aeiou]dh[yi]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/dh/g, "ch"));
	}
}

// ㄹ + ㅎ → ㄹ
//var find = syl.match(/[aeiou]lh[aeiouy]/g);
//if (find !== null) {
//	console.log(find);
//	for (i = 0; i < find.length; i++) {
//   		syl = syl.replace(find[i], find[i].replace(/lh/g, "r"));
//	}
//}

// ㄱ + ㅁ →  ㅇ ㅁ
var find = syl.match(/[aeiou]km[aeiouy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/km/g, "ngm"));
	}
}

// ㄱ + ㄴ → ㅇ, ㄴ
//syl = syl.replace(/kn/g, "ngn");

// ㄷ + ㅎ → ㅌ
var find = syl.match(/dh[aeouy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/dh/g, "t"));
	}
}

// ㅎ + ㄷ → ㅌ
var find = syl.match(/hd[aeouy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/hd/g, "t"));
	}
}

// ㅈ, ㄷ, ㅅ, ㅌ, ㅆ, ㅊ before ㄴ or ㅁ


//ㅆㄴ becomes ㄴㄴ
var find = syl.match(/[aeiou]ssn[aeouy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/ssn/g, "nn"));
	}
}

// ㅆㄴ becomes ㄴㄴ
var find = syl.match(/[aeiou]ssm[aeouy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/ssm/g, "nm"));
	}
}

// ㅈㄴ becomes ㄴㄴ
// ㄷㄴ becomes ㄴㄴ
// ㅌㄴ becomes ㄴㄴ
// ㅅㄴ becomes ㄴㄴ
// ㅊㄴ becomes ㄴㄴ
syl = syl.replace(/chn/g, "nn");

var find = syl.match(/[aeiou][stdj]n[aeouy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/[stdj]n/g, "nn"));
	}
}

// ㅅㅁ becomes ㄴㅁ
// ㅈㅁ becomes ㄴㅁ
// ㄷㅁ becomes ㄴㅁ
// ㅊㅁ becomes ㄴㅁ
syl = syl.replace(/chm/g, "nm");

var find = syl.match(/[aeiou][jsd]m[aeouy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/[sjd]m/g, "nm"));
	}
}

// ㅆ ㄷ becomes ㄸ
// ㅊ ㄷ becomes ㄸ

var find = syl.match(/[aeiou]ssd[aeouy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/ssd/g, "tt"));
	}
}

var find = syl.match(/[aeiou]chd[aeouy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/chd/g, "tt"));
	}
}


// ㅈ ㄷ becomes ㄸ
// ㄷ ㄷ becomes ㄸ 
// ㅅ ㄷ becomes ㄸ 
// ㅌ ㄷ becomes ㄸ - not anymore (td)

var find = syl.match(/[sjdt]d[aeouiy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/[sjd]d/g, "tt"));
	}
}

// ㄱ ㄷ, makes ㄷ → ㄸ
// ㅂ ㄷ, makes ㄷ → ㄸ
//var find = syl.match(/[bpkl]d[aeouiy]/g);
//if (find !== null) {
//	console.log(find);
//	for (i = 0; i < find.length; i++) {
//   		syl = syl.replace(find[i], find[i].replace(/d/g, "tt"));
//	}
//}

// ㅈ, ㄷ, ㅅ, ㅌ, ㅆ, ㅊ followed by ㅅ, romanize them as ㅅ

syl = syl.replace(/js/g, "ss");
syl = syl.replace(/ds/g, "ss");
syl = syl.replace(/ts/g, "ss");
syl = syl.replace(/chs/g, "ss");

// ㅆ ㅅ becomes ㅅㅅ
var find = syl.match(/[aeiou]sss[aeouy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/sss/g, "ss"));
	}
}

// ㅆ becomes ㅅㅅ
var find = syl.match(/[aeiou]ss[aeouy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/ss/g, "ss"));
	}
}

// ㅆ followed by consonant
 var find = syl.match(/[aeiou]ss[^aeoiuy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/ss/g, "t"));
	}
}

// ㅅ followed by consonant
var find = syl.match(/[aeiou]s[bpgkdtnmj]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/s/g, "t"));
	}
}

// mos/못 followed by consonant
var find = syl.match(/mos[^aeiouy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/mos/g, "mot"));
	}
}
// ㅈ, ㄷ, ㅊ+ ㅎ followed by y or i, makes ㅊ together 

var find = syl.match(/[jd]h[yi]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/[jd]h/g, "ch"));
	}
}

var find = syl.match(/chh[yi]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/chh/g, "ch"));
	}
}

// ㅈ, ㄷ, ㅅ, ㅌ become t when followed by either b, p, k, g
var find = syl.match(/[aeoui][jdts][\sbkgp]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/[jdts]/g, "t"));
	}
}

// ㅊ become t when followed by either b, p, k, g
var find = syl.match(/ch[\sbkgp]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/ch/g, "t"));
	}
}

// ㄴ + ㄹ  → ㄹ, ㄹ
syl = syl.replace(/nr/g, "ll");
// ㄹ + ㄹ  → ㄹㄹ
syl = syl.replace(/lr/g, "ll");
// ㄹ + ㄴ  → ㄹ, ㄹ
syl = syl.replace(/ln/g, "ll");
// ㄱ + ㄹ → ㅇ, ㄴ
syl = syl.replace(/kr/g, "ngn");
// ㅇ + ㄹ → ㅇ, ㄴ
syl = syl.replace(/ngr/g, "ngn");
// ㄱ + ㅎ  → ㅋ
// syl = syl.replace(/kh/g, "k");
// ㅎ + ㄱ  → ㅋ
syl = syl.replace(/hg/g, "k");
// ㅂ + ㅎ → ㅍ
syl = syl.replace(/bh/g, "p");
// ㅎ + ㅈ → ㅊ
syl = syl.replace(/hj/g, "ch");

// ㅎ ㅊ = ㅌ ㅊ
var find = syl.match(/[aeoui]hch[aeouiy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/hch/g, "tch"));
	}
}

// ㅎㄴ = ㄴㄴ
var find = syl.match(/[aeoui]hn[aeouiy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/hn/g, "nn"));
	}
}


// ㅌㄴ = ㄴㄴ
syl = syl.replace(/tn/g, "nn");

// ㅌㅁ = ㄴㅁ
syl = syl.replace(/tm/g, "nm");

// ㅈ + ㅎ → ㅊ
syl = syl.replace(/jh/g, "ch");


// consonant followed by 의 = e
var find = syl.match(/[^aouiey\s]ui/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/ui/g, "e"));
	}
}

// 의 followed by space/end of word, 의 = ye
var find = syl.match(/[aouiey]ui[\s]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/ui/g, "ye"));
	}
}


// ㄳ gs, ㄵ nj, ㄶ nh, ㄺ lg, ㄻ lm, ㄼ lb, ㄽ ls, ㄾ lt, ㄿ lp, ㅀ lh, ㅄ bs

// ㄶ -> ㅎ silent followed by a vowel
var find = syl.match(/[aeiou]nh[aeouidn]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/nh/g, "n"));
	}
}


// ㅄ → ㅂ followed by consonant
var find = syl.match(/[aeiou]bs[^aeiouyn]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/bs/g, "ps"));
	}
}

// ㅄ  followed by n
var find = syl.match(/[aeiou]bs[n]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/bs/g, "m"));
	}
}

// ㅄ → ㅂ followed by a vowel
var find = syl.match(/[aeiou]bs[aeiouy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/bs/g, "ps"));
	}
}

// ㄺ → ㄱ followed by consonant
var find = syl.match(/[aeiou]lk[^aeiouy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/lk/g, "k"));
	}
}

//ㅀ → r followed by vowel 싫어 - 시러
var find = syl.match(/[i]lh[e]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/lh/g, "r"));
	}
}

// ㄻ → ㅁ followed by consonant
var find = syl.match(/[aeiou]lm[^aeiouy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/lm/g, "m"));
	}
}

// ㄵ → ㄴ followed by consonant
var find = syl.match(/[aeiou]nj[^aeiouy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/nj/g, "n"));
	}
}

// ㄳ → ㄱ followed by consonant
var find = syl.match(/[aeiou]ks[bpgkdtnmjs]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
   		syl = syl.replace(find[i], find[i].replace(/ks/g, "k"));
	}
}

// ㄼ → ㄹ followed by consonant
var find = syl.match(/[aeiou]lb[^aeiouy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
 		syl = syl.replace(find[i], find[i].replace(/lb/g, "l"));
	}
}

// [pr],[pn], [pm] = [mn]
// 입력 ipryeok = imnyeok
// 입니다 ipnida = imnida
// 입매 ipmae = immae

var find = syl.match(/[i]pr[aeiouy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
 		syl = syl.replace(find[i], find[i].replace(/pr/g, "mn"));
	}
}

var find = syl.match(/[i]pn[aeiouy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
 		syl = syl.replace(find[i], find[i].replace(/pn/g, "mn"));
	}
}

var find = syl.match(/[i]pm[aeiouy]/g);
if (find !== null) {
	console.log(find);
	for (i = 0; i < find.length; i++) {
 		syl = syl.replace(find[i], find[i].replace(/pm/g, "mn"));
	}
}

// individual words

syl = syl.replace(/geojinmal/g, "geojitmal");
//  -->aet haet 했
syl = syl.replace(/aet/g, "haet");
syl = syl.replace(/bicto/g, "bitto");
syl = syl.replace(/bicchu/g, "bitchu");
syl = syl.replace(/banjak/g, "banjjak");
syl = syl.replace(/bakhyeo/g, "balkyeo");
syl = syl.replace(/jengongiji/g, "juingongiji");
syl = syl.replace(/hakka/g, "halkka");
syl = syl.replace(/geureokka/g, "geureolkka");
syl = syl.replace(/geokka/g, "geolkka");
syl = syl.replace(/ikka/g, "ilkka");
	
syl = syl.replace(/rhaet/g, "raet");
syl = syl.replace(/bhaeteul/g, "baeteul");
syl = syl.replace(/seoldeungnyeok/g, "seoldeuglyeog");
syl = syl.replace(/gyeonkk/g, "gyeokk");
syl = syl.replace(/yongmeogeul/g, "yogmeogeul");
syl = syl.replace(/dwhaeteo/g, "dwaesseo");
syl = syl.replace(/mendo/g, "muindo");
syl = syl.replace(/deuti/g, "deushi");
syl = syl.replace(/hanimnan/g, "hanimman");
syl = syl.replace(/imnajchumhae/g, "immatchumhae");
// syl = syl.replace(/dwhaetda/g, "dwaetta");
syl = syl.replace(/shiweonan/g, "shiweonhan");
syl = syl.replace(/ganjireopimyeon/g, "ganjireophimyeon");
syl = syl.replace(/syugasyuga/g, "shyugashyuga");
syl = syl.replace(/yeongweonan/g, "yeongweonhan");
syl = syl.replace(/jigyeojuneun/g, "jikyeojuneun");
syl = syl.replace(/balkeun/g, "balgeun");

document.romanization.rom.value=syl;
}
