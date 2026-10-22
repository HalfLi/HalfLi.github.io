// 공개 링크가 준비되면 각 프로젝트의 `videoUrl`에 YouTube/Vimeo URL을 넣으세요.
// 현재 3개의 개인 모션그래픽만 기존 공개 YouTube 링크를 사용합니다.
const projects = [
  {
    id: "01",
    title: "휴24시동물의료센터",
    category: "editing",
    role: "직접 편집",
    format: "병원 홍보 영상",
    visual: "#1d3758",
    shape: "#f2a900",
    summary: "완성 영상 파일이 확인된 병원 홍보 영상입니다.",
    contribution: "직접 편집",
    note: "공개 가능 여부 확인 완료. 웹사이트용 영상 링크를 연결하면 카드에서 바로 재생 또는 외부 이동으로 확장할 수 있습니다.",
  },
  {
    id: "02",
    title: "미사원탑신경외과",
    category: "editing",
    role: "직접 편집",
    format: "병원 홍보 · 정보형 · 숏폼",
    visual: "#395763",
    shape: "#c2e4d5",
    summary: "병원 홍보, 신경성형술, PRP, 프롤로치료 숏폼 결과물이 확인된 작업 묶음입니다.",
    contribution: "직접 편집",
    note: "프로젝트별 영상 링크와 상세 편집 범위는 추가 연결 예정입니다.",
  },
  {
    id: "03",
    title: "아산웰마취통증의학과",
    category: "editing",
    role: "직접 편집",
    format: "병원 홍보 영상",
    visual: "#78594e",
    shape: "#f5d4b2",
    summary: "완성 영상 파일이 확인된 병원 홍보 작업입니다.",
    contribution: "직접 편집",
    note: "영상 링크와 프로젝트 설명은 추후 추가 예정입니다.",
  },
  {
    id: "04",
    title: "실버라이닝",
    category: "editing",
    role: "직접 편집",
    format: "홍보 · 홈페이지 영상",
    visual: "#332d40",
    shape: "#d8a0c8",
    summary: "홍보 영상과 홈페이지 영상 관련 완성본 및 프로젝트 파일이 확인된 작업입니다.",
    contribution: "직접 편집",
    note: "영상 링크와 공개용 대표 컷을 추후 연결합니다.",
  },
  {
    id: "05",
    title: "브이모먼트",
    category: "editing",
    role: "직접 편집",
    format: "브랜드 영상",
    visual: "#422f25",
    shape: "#f6d480",
    summary: "완성 영상 파일이 확인된 브랜드 영상 작업입니다.",
    contribution: "직접 편집",
    note: "웹사이트용 설명과 영상 링크를 추가할 수 있습니다.",
  },
  {
    id: "06",
    title: "마곡베스트정형외과",
    category: "editing",
    role: "직접 편집",
    format: "홍보 · 홈페이지 · 인터뷰",
    visual: "#6e3c3c",
    shape: "#f1b7a3",
    summary: "홍보 영상, 홈페이지 영상, 인터뷰 결과물이 확인된 작업입니다.",
    contribution: "직접 편집",
    note: "공개 가능한 결과물의 링크와 세부 편집 범위를 추가 예정입니다.",
  },
  {
    id: "07",
    title: "드림나무한의원",
    category: "editing",
    role: "직접 편집",
    format: "성장치료 홍보 영상",
    visual: "#435b38",
    shape: "#dfdda7",
    summary: "성장치료 관련 홍보 영상 결과물이 확인된 작업입니다.",
    contribution: "직접 편집",
    note: "공개 영상 링크와 프로젝트 설명을 연결할 수 있습니다.",
  },
  {
    id: "08",
    title: "더바른치과",
    category: "editing",
    role: "직접 편집",
    format: "홍보 · 홈페이지 · 인터뷰",
    visual: "#244d64",
    shape: "#b9e2dc",
    summary: "병원 홍보, 홈페이지, 인터뷰 결과물과 편집 프로젝트 파일이 확인된 작업입니다.",
    contribution: "직접 편집",
    note: "영상 링크와 공개용 프로젝트 상세는 추후 추가 예정입니다.",
  },
  {
    id: "09",
    title: "의료 채널 콘텐츠 기획",
    category: "planning",
    role: "기획 · 썸네일 · 채널 운영",
    format: "의료 채널 콘텐츠",
    visual: "#5c3e67",
    shape: "#edb1d4",
    summary: "난초꽃피다안과의원, 두팔로정형외과의원, 은평아이디의원 등 의료 채널의 콘텐츠 기획 작업입니다.",
    contribution: "콘텐츠 기획 · 썸네일 기획 · 채널 관리 / 편집은 외주 제작",
    note: "의뢰처별 YouTube 링크와 기획 자료를 선별해 연결할 예정입니다.",
  },
  {
    id: "10",
    title: "의료 채널 콘텐츠 기획 II",
    category: "planning",
    role: "기획 · 썸네일 · 채널 운영",
    format: "의료 채널 콘텐츠",
    visual: "#36505f",
    shape: "#a3d0d5",
    summary: "양산더존한방병원, 엘치과병원, 자연삶한방병원, 잠실온피부과, 청담란셀의원, 한양대학교병원 관련 기획 자료가 확인됩니다.",
    contribution: "콘텐츠 기획 · 썸네일 기획 · 채널 관리 / 편집은 외주 제작",
    note: "프로젝트별 공개 링크와 기획 자료를 추가한 뒤 분리 카드로 확장할 수 있습니다.",
  },
  {
    id: "11",
    title: "Cosmic Trail",
    category: "motion",
    role: "개인 작업 · 100% 제작",
    format: "모션그래픽",
    visual: "#271857",
    shape: "#8d68fb",
    videoId: "1TrJVyGyiXQ",
    videoUrl: "https://youtu.be/1TrJVyGyiXQ",
    summary: "기획부터 제작까지 직접 진행한 개인 모션그래픽 작업입니다.",
    contribution: "기획 · 디자인 · 모션그래픽 100% 직접 제작",
    note: "기존 공개 YouTube 영상으로 바로 확인할 수 있습니다.",
  },
  {
    id: "12",
    title: "해외자원개발프로젝트 공모전",
    category: "motion",
    role: "개인 작업 · 100% 제작",
    format: "모션그래픽",
    visual: "#263545",
    shape: "#52bbd8",
    videoId: "lvqUcavM_sE",
    videoUrl: "https://youtu.be/lvqUcavM_sE",
    summary: "기획부터 제작까지 직접 진행한 개인 모션그래픽 작업입니다.",
    contribution: "기획 · 디자인 · 모션그래픽 100% 직접 제작",
    note: "기존 공개 YouTube 영상으로 바로 확인할 수 있습니다.",
  },
  {
    id: "13",
    title: "현대카드 MX Black Edition",
    category: "motion",
    role: "개인 작업 · 100% 제작",
    format: "모션그래픽",
    visual: "#121212",
    shape: "#d5aa58",
    videoId: "Ic37jOEEM2g",
    videoUrl: "https://youtu.be/Ic37jOEEM2g",
    summary: "기획부터 제작까지 직접 진행한 개인 모션그래픽 작업입니다.",
    contribution: "기획 · 디자인 · 모션그래픽 100% 직접 제작",
    note: "기존 공개 YouTube 영상으로 바로 확인할 수 있습니다.",
  },
];

// User-confirmed responsibilities. Local excerpts are derivatives of source files.
projects.filter(p => p.category === 'editing').forEach((p,i) => {
  p.image = `assets/edit-${i+1}.jpg`;
  p.preview = `assets/edit-${i+1}.mp4`;
  p.summary = `${p.format}의 영상 편집을 담당했습니다.`;
  p.note = '원본 영상 중 16초를 발췌한 무음 미리보기입니다. 제작 시기와 세부 편집 공정은 추가 확인 후 보완합니다.';
});
projects[0].note = '보관된 파일은 1차 초안(4K) 버전입니다. 아래는 해당 버전의 16초 무음 발췌본이며 최종 납품본 여부는 추가 확인이 필요합니다.';
projects[8].title = '잠실온피부과';
projects[8].image = 'assets/jamsil.jpg';
projects[8].summary = '콘텐츠 기획, 썸네일 기획, 채널 관리를 담당했습니다. 편평사마귀·리프팅·기미·피부장벽 주제의 썸네일 결과물이 보관되어 있습니다.';
projects[9].title = '청담란셀의원';
projects[9].image = 'assets/rancel.jpg';
projects[9].summary = '콘텐츠 기획, 썸네일 기획, 채널 관리를 담당했습니다. 바디 울쎄라·피코토닝 등 주제별 기획·결과물이 보관되어 있습니다.';
projects[8].note = projects[9].note = '표시된 이미지는 보관된 썸네일 결과물입니다. 본인 역할은 기획이며 최종 디자인 제작 범위는 추가 확인이 필요합니다. 외주 편집 영상의 YouTube 링크를 추가할 예정입니다.';

const preserved = projects.filter(p=>p.category !== 'editing');
projects.splice(0, projects.length, ...videoCatalog, ...preserved);
const planningChannels=[
  ['plan-1','난초꽃피다안과의원','https://www.youtube.com/@%EC%8B%9C%EB%A0%A5%EC%9D%98%EC%A0%95%EC%84%9D/videos'],
  ['plan-2','두팔로정형외과의원','https://www.youtube.com/@dupalo_os/videos'],
  ['plan-3','은평아이디의원','https://www.youtube.com/@drseyoon/videos'],
  ['plan-4','양산더존한방병원','https://www.youtube.com/@thezonehospital/videos'],
  ['plan-5','엘치과병원','https://www.youtube.com/@pg_dental/videos'],
  ['plan-7','한양대학교병원',null],
];
planningChannels.forEach(([id,title,channelUrl])=>projects.push({id,title,channelUrl,category:'planning',format:'의료 채널 콘텐츠',visual:'#31494c',shape:'#ffffff12'}));
projects.find(p=>p.id==='09').channelUrl='https://www.youtube.com/@skinonair';
projects.find(p=>p.id==='10').channelUrl='https://www.youtube.com/@drran_skin/videos';
projects.filter(p=>p.category==='planning').forEach(p=>{
  p.role='콘텐츠 기획 · 채널 운영';
  p.contribution='콘텐츠 기획 · 채널아트 · 썸네일 기획·제작 · 채널 관리';
  p.summary=`${p.title}의 콘텐츠 기획과 채널 관리에 참여했습니다. 영상 편집은 외주 편집자가 진행했습니다.`;
  p.note='콘텐츠 기획·채널아트·썸네일 기획·제작과 채널 관리를 담당했습니다. 영상 편집은 외주 편집자가 진행했습니다. 대표 영상은 퇴사일(2026년 1월 26일) 이전 게시물을 기준으로 선정했습니다.';
  p.period='담당 시작 시점 미확인 · 2026년 1월 26일 퇴사';
});
const hanyang=projects.find(p=>p.id==='plan-7');
hanyang.videoId='akBYq7RZoCI';
hanyang.selectedVideos=[
  ['akBYq7RZoCI','기획 참여 영상 01'],['Vy4hWMevRYA','기획 참여 영상 02'],
  ['gCWyyBY4pwc','먹고 남은 항생제, 남에게 나눠줘도 될까?'],
  ['E9b2PAgnebQ','기획 참여 영상 04'],['ZnRB_6lpzKU','기획 참여 영상 05']
];
hanyang.selectedVideos=planningSelections['plan-7'].map(v=>[v.id,v.title,v.published]);
hanyang.selectionNote='직접 참여한 5편만 수록했습니다. 2026년 2월 게시 영상 3편은 퇴사 전에 작업하고 퇴사 후 게시된 결과물입니다.';
hanyang.note='5편 모두 퇴사 전 기획 참여 작업입니다. 게시일은 실제 작업 시점과 다를 수 있으며, 퇴사 후 게시된 영상도 포함됩니다. 본인의 기획·채널 관련 역할과 외주 영상 편집을 구분해 표기합니다.';
hanyang.period='2026년 1월 26일 퇴사 전 작업 · 일부 영상은 퇴사 후 게시';
projects.filter(p=>p.category==='planning' && p.id!=='plan-7').forEach(p=>{
  const selected=planningSelections[p.id]||[];
  p.selectedVideos=selected.map(v=>[v.id,v.title,v.published,v.views,v.metadata_checked]);
  if(selected.length){p.videoId=selected[0].id;delete p.image;}
  p.selectionNote=p.id==='10'?'직접 기획·운영을 담당한 콘텐츠 중 현재 공개 조회수 순으로 선정했습니다. 조회수는 2026년 10월 21일 확인한 누적 수치입니다.':p.id==='plan-3'?'2026년 1월 26일 이전 게시물 중 공개 조회수 순으로 선정 · 조회수 확인일 2026년 10월 20일. 현재 조회수는 재직 당시 성과를 의미하지 않습니다.':['plan-2','plan-4'].includes(p.id)?'직접 지정한 대표 영상 · 게시일 확인 완료.':p.id==='plan-5'?'2026년 1월 23일 이전 게시물에서 선정.':'게시일과 콘텐츠 주제를 기준으로 선정.';
});
const orchid=projects.find(p=>p.id==='plan-1');
orchid.period='담당 영상 게시 범위: 2025년 9월 19일~10월 14일';
orchid.note='2025년 9월 19일부터 10월 14일까지 게시된 영상만 본인 참여 작업입니다. 해당 범위 밖의 채널 영상은 본인 작업에 포함하지 않습니다.';
orchid.selectionNote='확인된 담당 영상 범위 안에서 시력교정술·스마일프로·렌즈삽입술 주제를 선정했습니다.';
projects.filter(p=>p.category==='editing').forEach(p=>{
  const source=p.version||p.title;
  p.aiAvatar=p.format==='AI 아바타';
  p.format=/인터뷰/.test(source)?'인터뷰':/비전목표|증정식|마케터영상/.test(source)?'사내·행사':/숏폼|숏츠/.test(source)?'숏폼':/홈페이지/.test(source)?'홈페이지':/대장내시경|신경성형술|PRP|성장치료/.test(source)?'의료정보·설명':'홍보·브랜드';
  if(source.includes('프롤로'))p.role=p.contribution='직접 편집';
});
const displayTitles={
  'work-01':'대장내시경 안내 | HeyGen AI · 롱폼',
  'work-02':'대장내시경 안내 | HeyGen AI · 숏폼',
  'work-03':'프로덕션팀 | 비전·목표 영상',
  'work-04':'더바른치과 | 인터뷰 1부','work-05':'더바른치과 | 인터뷰 2부',
  'work-06':'더바른치과 | 홈페이지 영상','work-07':'더바른치과 | 병원 홍보',
  'work-08':'더케이내과 | 인터뷰','work-09':'드림나무한의원 | 성장치료 안내',
  'work-10':'드림나무한의원 | 홍보 영상','work-11':'리엔의원 | 인터뷰 1부',
  'work-12':'리엔의원 | 인터뷰 2부','work-13':'마곡베스트정형외과 | 인터뷰 1부',
  'work-14':'마곡베스트정형외과 | 인터뷰 2부','work-15':'마곡베스트정형외과 | 홈페이지 영상',
  'work-16':'마곡베스트정형외과 | 병원 홍보','work-17':'프로덕션팀 | 타운홀 영상',
  'work-18':'미사원탑신경외과 | PRP 치료 안내','work-19':'미사원탑신경외과 | 병원 홍보',
  'work-20':'미사원탑신경외과 | 프롤로치료 숏폼','work-21':'미사원탑신경외과 | 신경성형술 안내',
  'work-22':'브이모먼트 | 브랜드 영상','work-23':'사내 행사 | 설 선물 증정식',
  'work-24':'신경성형술 흑과백 | AI 아바타 영상','work-25':'실버라이닝 | 홍보 영상',
  'work-26':'아산웰마취통증의학과 | 병원 홍보','work-27':'용인성모내과 | 숏폼 01',
  'work-28':'용인성모내과 | 숏폼 02','work-29':'용인성모내과 | 숏폼 03',
  'work-30':'용인성모내과 | 인터뷰 1부','work-31':'용인성모내과 | 인터뷰 2부',
  'work-32':'클리오닉이비인후과 | 인터뷰 1부','work-33':'클리오닉이비인후과 | 인터뷰 2부',
  'work-34':'휴24시동물의료센터 | 병원 홍보'
};
projects.filter(p=>p.category==='editing').forEach(p=>{
  p.title=displayTitles[p.id]||p.title;
  p.role='편집 작업';
  p.contribution='편집·후반작업';
  p.note=p.complete?(p.audio?'전체 영상 · 오디오 포함':'전체 영상 · 원본 오디오 없음'):'';
  if(['work-01','work-02'].includes(p.id)){
    p.tool='HeyGen';p.contribution='HeyGen 활용 · AI 영상 기획·제작';
    p.summary='‘1분 안에 말아주는 대장내시경’은 HeyGen을 활용한 AI 영상입니다. 대장내시경 정보를 전달하는 콘텐츠를 롱폼과 숏폼 두 형식으로 직접 제작했습니다.';
    p.aiCapability='AI 아바타를 활용한 정보 전달형 영상 제작 역량을 보여주는 작업입니다.';
  }
});
projects.filter(p=>p.category==='planning').forEach(p=>{
  p.summary=`${p.title}의 콘텐츠와 채널 비주얼을 기획하고, 썸네일 기획·제작 및 채널 관리를 담당했습니다.`;
  p.note='';
  if(p.id!=='10')p.selectionNote='';
});
const grid = document.querySelector("#projectGrid");
const cardDescriptions={
  'work-01':'HeyGen AI 아바타 · 대장내시경 정보 전달',
  'work-02':'같은 의료 주제를 숏폼으로 구성한 AI 영상',
  'work-03':'팀의 비전과 목표를 공유하는 사내 콘텐츠',
  'work-04':'인터뷰 편집 · 강조 자막과 그래픽',
  'work-05':'더바른치과 인터뷰 · 후반부 구성',
  'work-06':'웹사이트에 활용하는 치과 소개 영상',
  'work-07':'병원 외관 소개 · 장면 전환 중심의 홍보 영상',
  'work-08':'의료기관 인터뷰 · 대화 중심 콘텐츠',
  'work-09':'성장치료 과정의 순서를 전달하는 정보형 영상',
  'work-10':'의료기관 홍보 · 직접 편집 결과물',
  'work-11':'리엔의원 인터뷰 · 1부 편집',
  'work-12':'리엔의원 인터뷰 · 2부 편집',
  'work-13':'정형외과 인터뷰 · 전반부 구성',
  'work-14':'정형외과 인터뷰 · 후반부 구성',
  'work-15':'웹사이트용 정형외과 소개 영상',
  'work-16':'정형외과의 병원 홍보 콘텐츠',
  'work-17':'타운홀에서 공유하는 사내 영상',
  'work-18':'PRP 치료를 주제로 한 정보 전달 콘텐츠',
  'work-19':'진료 장면과 병원 둘러보기를 담은 홍보 영상',
  'work-20':'프롤로치료 주제의 짧은 정보 콘텐츠',
  'work-21':'신경성형술을 주제로 한 설명형 영상',
  'work-22':'피드백 반영 · 색감 통일과 장면 선별',
  'work-23':'설 선물 증정식 · 사내 행사 기록',
  'work-24':'AI 아바타로 전달하는 신경성형술 정보',
  'work-25':'의료기관 홍보 · 실버라이닝 소개',
  'work-26':'마취통증의학과의 병원 소개 콘텐츠',
  'work-27':'용인성모내과 숏폼 시리즈 · 첫 번째 영상',
  'work-28':'용인성모내과 숏폼 시리즈 · 두 번째 영상',
  'work-29':'용인성모내과 숏폼 시리즈 · 세 번째 영상',
  'work-30':'자연스러운 대화 중심의 인터뷰 · 1부',
  'work-31':'자연스러운 대화 중심의 인터뷰 · 2부',
  'work-32':'이비인후과 인터뷰 · 전반부 구성',
  'work-33':'이비인후과 인터뷰 · 후반부 구성',
  'work-34':'동물의료센터의 병원 소개 영상',
  '11':'시네마틱 타이포그래피 · 개인 모션그래픽',
  '12':'정보 시각화 · 개인 모션그래픽',
  '13':'제품·브랜드 표현 · 개인 모션그래픽'
};
const contentBadges={'홍보·브랜드':'BRAND FILM','인터뷰':'INTERVIEW','의료정보·설명':'INFORMATION','숏폼':'SHORT FORM','홈페이지':'WEB VIDEO','사내·행사':'INTERNAL / EVENT'};
const hoverIds=new Set(['work-01','work-04','work-07','work-09','work-19','work-22','work-27','work-30']);
projects.forEach(p=>{
  p.cardDescription=cardDescriptions[p.id]||(p.category==='planning'?'콘텐츠 구성 · 썸네일 기획·제작 · 채널 운영':p.format);
  p.badge=p.category==='planning'?'CONTENT PLANNING':p.category==='motion'?'MOTION GRAPHICS':p.aiAvatar?'AI VIDEO':contentBadges[p.format]||'VIDEO';
  if(hoverIds.has(p.id))p.hoverPreview=`assets/hover-${p.id}.mp4`;
});
const cosmicTrail=projects.find(p=>p.id==='11');
Object.assign(cosmicTrail,{
  image:'assets/motion-cosmic.jpg',preview:'assets/motion-cosmic.mp4',hoverPreview:'assets/hover-motion-cosmic.mp4',
  duration:146.41,audio:true,note:'전체 영상 · 오디오 포함',
  summary:'달 탐사 기록과 미래 기술을 흑백·연두색의 편집 디자인, 타이포그래피와 모션으로 재구성한 개인 작업입니다.',
  cardDescription:'편집 디자인 · 타이포그래피 · 모션그래픽'
});
const mxBlack=projects.find(p=>p.id==='13');
Object.assign(mxBlack,{
  image:'assets/motion-mx.jpg',preview:'assets/motion-mx.mp4',hoverPreview:'assets/hover-motion-mx.mp4',
  duration:66.47,audio:true,note:'전체 영상 · 오디오 포함',
  summary:'현대카드 MX Black Edition의 카드 디자인과 혜택을 흑백 레이아웃과 모션 타이포그래피로 표현한 개인 작업입니다.',
  cardDescription:'브랜드 디자인 · 모션 타이포그래피'
});
const specificSummaries={
  'work-04':'더바른치과 인터뷰의 1부 편집 작업입니다. 대화 장면에 강조 자막과 그래픽을 활용한 결과물을 확인할 수 있습니다.',
  'work-09':'성장치료 과정을 전달하는 정보형 영상입니다. 제작 가이드의 핵심은 시청자가 치료 과정의 순서를 이해할 수 있도록 구성하고 자막의 가독성과 색상 일관성을 유지하는 것이었습니다.',
  'work-19':'진료 장면과 병원 둘러보기를 담은 미사원탑신경외과 홍보 영상입니다. 추가된 둘러보기 장면을 포함한 편집 결과물입니다.',
  'work-22':'브이모먼트 브랜드 영상 편집 작업입니다. 보관된 피드백에는 밝기·색감 통일, 불필요한 장면 제외와 인물 블러 처리가 기록되어 있으며, 이를 반영해 결과물을 다듬었습니다.',
  'work-30':'용인성모내과 인터뷰 1부입니다. 편집 가이드에서는 대본을 그대로 읽지 않는 대화의 흐름을 파악하고, 현장 상호작용에서 자연스러운 포인트를 살리는 방향을 제시했습니다.',
  'work-31':'용인성모내과 인터뷰 2부입니다. 자연스럽게 대답하는 인터뷰 형식에 맞춰 대화 중심의 편집 결과물을 구성했습니다.'
};
projects.forEach(p=>{if(specificSummaries[p.id])p.summary=specificSummaries[p.id];});
const hoverMotionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
const hoverPointerPreference=window.matchMedia('(hover: hover) and (pointer: fine)');
const hoverControllers=new Set();
let activeHover=null;
function stopAllHoverPreviews(){hoverControllers.forEach(controller=>controller.stop());}
function attachHoverPreview(button,visual,project){
  if(!project.hoverPreview)return;
  const video=document.createElement('video');
  video.className='hover-preview';video.muted=true;video.defaultMuted=true;video.loop=true;video.playsInline=true;video.preload='none';video.setAttribute('aria-hidden','true');video.tabIndex=-1;
  visual.append(video);
  const hint=document.createElement('span');hint.className='preview-hint';hint.textContent='3초 미리보기 · 무음';hint.setAttribute('aria-hidden','true');visual.append(hint);
  let timer;
  const controller={stop(){
    clearTimeout(timer);visual.classList.remove('is-previewing');video.pause();
    if(video.hasAttribute('src')){video.removeAttribute('src');video.load();}
    if(activeHover===controller)activeHover=null;
  }};
  hoverControllers.add(controller);
  const start=()=>{
    if(hoverMotionPreference.matches||!hoverPointerPreference.matches||document.hidden||dialog.open)return;
    stopAllHoverPreviews();
    timer=setTimeout(()=>{
      if(dialog.open||document.hidden||hoverMotionPreference.matches||!hoverPointerPreference.matches)return;
      activeHover=controller;video.src=project.hoverPreview;
      video.play().catch(()=>{if(activeHover===controller)controller.stop();});
    },180);
  };
  video.addEventListener('playing',()=>{if(activeHover===controller&&!dialog.open)visual.classList.add('is-previewing');else controller.stop();});
  video.addEventListener('error',()=>controller.stop());
  button.addEventListener('pointerenter',start);button.addEventListener('focus',start);
  button.addEventListener('pointerleave',()=>controller.stop());button.addEventListener('blur',()=>controller.stop());
}
hoverMotionPreference.addEventListener('change',stopAllHoverPreviews);
hoverPointerPreference.addEventListener('change',stopAllHoverPreviews);
document.addEventListener('visibilitychange',()=>{if(document.hidden)stopAllHoverPreviews();});
const titleKey='portfolio-title-overrides-v1';
const localEditor=['127.0.0.1','localhost'].includes(location.hostname);
let titleOverrides={...sharedTitles};
try { const saved=JSON.parse(localStorage.getItem(titleKey)||'{}'); if(localEditor && saved && typeof saved==='object' && !Array.isArray(saved)) titleOverrides={...saved,...sharedTitles}; } catch {}
if(localEditor)document.querySelector('.title-settings').hidden=false;
async function persistTitles(titles){
  const response=await fetch('/api/titles',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(titles)});
  if(!response.ok)throw Error('사이트 파일 저장 실패. 로컬 서버를 다시 실행해 주세요.');
  localStorage.setItem(titleKey,JSON.stringify(titles));
}
projects.forEach(p=>{p.originalTitle=p.title;if(typeof titleOverrides[p.id]==='string')p.title=titleOverrides[p.id];});
const escapeHtml=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const template = document.querySelector("#projectTemplate");
const dialog = document.querySelector("#projectDialog");
const dialogContent = document.querySelector("#dialogContent");
const closeDialog = document.querySelector(".dialog-close");
const count = document.querySelector("#projectCount");
const filters = document.querySelectorAll(".filter");

function createCard(project) {
  const fragment = template.content.cloneNode(true);
  const card = fragment.querySelector(".project-card");
  const openButton = fragment.querySelector(".card-open");
  const visual = fragment.querySelector(".card-visual");
  const index = fragment.querySelector(".card-index");
  const role = fragment.querySelector(".role-label");
  const title = fragment.querySelector("h3");
  const format = fragment.querySelector(".card-format");
  const thumb = fragment.querySelector(".video-thumb");

  card.dataset.category = project.category;
  card.dataset.format = project.format;
  card.dataset.projectId=project.id;
  visual.style.setProperty("--visual", project.visual);
  visual.style.setProperty("--shape", project.shape);
  index.textContent = project.badge;
  role.textContent = project.role;
  title.textContent = project.title;
  format.textContent = project.cardDescription;

  if (project.image) {
    thumb.src = project.image;
    thumb.alt = `${project.title} 실제 작업 이미지`;
  } else if (project.videoId) {
    thumb.src = `https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`;
    thumb.alt = `${project.title} 영상 미리보기`;
  } else {
    thumb.remove();
    const placeholder=document.createElement('span');placeholder.className='visual-placeholder';placeholder.textContent=project.title;visual.append(placeholder);
  }

  attachHoverPreview(openButton,visual,project);
  openButton.addEventListener("click", () => openProject(project));
  return fragment;
}

function openProject(project) {
  stopAllHoverPreviews();
  dialogContent.innerHTML = `
    <div class="dialog-inner">
      <p class="dialog-kicker">${escapeHtml(project.role)} / ${project.badge}</p>
      <h2 id="dialogTitle">${escapeHtml(project.title)}</h2>
      ${localEditor && document.querySelector('#editTitles').checked ? `<form class="title-editor"><label for="titleInput">표시 제목</label><input id="titleInput" maxlength="160" value="${escapeHtml(project.title)}" required><button type="submit">제목 저장</button><p class="save-status" role="status">로컬 사이트 파일에 저장합니다. 공유 주소는 다시 배포하면 갱신됩니다.</p></form>` : ''}
      ${project.preview ? `<video class="detail-video" controls preload="none" poster="${project.image}"><source src="${project.preview}" type="video/mp4"></video>` : project.image ? `<img class="detail-image" src="${project.image}" alt="${project.title} 썸네일 결과물">` : ''}
      <dl class="dialog-info">
        <dt>콘텐츠 형식</dt><dd>${project.format}</dd>
        <dt>확인된 역할</dt><dd>${project.contribution}</dd>
        <dt>프로젝트 개요</dt><dd>${project.summary}</dd>
        ${project.category==='planning'?'<dt>담당 분야</dt><dd>콘텐츠 기획 · 채널 비주얼 · 운영</dd>':''}
        ${project.aiAvatar?'<dt>제작 방식</dt><dd>AI 아바타 활용</dd>':''}
        ${project.tool?`<dt>사용 도구</dt><dd>${project.tool}</dd>`:''}
        ${project.duration?`<dt>영상 길이</dt><dd>${Math.floor(project.duration/60)}분 ${Math.floor(project.duration%60)}초 · 전체 영상</dd>`:''}
      </dl>
      ${project.note?`<p class="dialog-note">${project.note}</p>`:''}
      ${project.aiCapability?`<section class="ai-capability"><span>AI VIDEO PRODUCTION</span><h3>HeyGen을 활용한 AI 영상 제작</h3><p>${project.aiCapability}</p></section>`:''}
      ${project.videoUrl ? `<a class="video-link" href="${project.videoUrl}" target="_blank" rel="noreferrer">YouTube에서 영상 보기 ↗</a>` : ""}
      ${project.channelUrl?`<a class="video-link" href="${project.channelUrl}" target="_blank" rel="noopener noreferrer">YouTube 채널 보기 ↗</a>`:''}
      ${project.selectedVideos?`<section class="selected-videos"><h3>대표 기획 영상</h3>${project.selectionNote?`<p>${escapeHtml(project.selectionNote)}</p>`:''}${project.selectedVideos.map(([id,title,date,views,checked])=>`<a href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener noreferrer"><img src="https://img.youtube.com/vi/${id}/hqdefault.jpg" alt="" loading="lazy"><span>${escapeHtml(title)} ↗${date?`<small class="video-date">게시일 ${escapeHtml(date)}</small>`:''}${views?`<small class="video-views">공개 조회수 ${Number(views).toLocaleString('ko-KR')}회 · ${escapeHtml(checked)} 확인</small>`:''}</span></a>`).join('')}</section>`:''}
    </div>`;
  dialog.showModal();
  const form=dialog.querySelector('.title-editor');
  if(form)form.addEventListener('submit',async event=>{
    event.preventDefault();
    const title=form.querySelector('input').value.trim();
    if(!title){form.querySelector('.save-status').textContent='제목을 입력해 주세요.';return;}
    const next={...titleOverrides,[project.id]:title};
    try{await persistTitles(next);}catch(error){form.querySelector('.save-status').textContent=error.message;return;}
    titleOverrides=next;project.title=title;
    dialog.querySelector('#dialogTitle').textContent=title;
    [...grid.children].find(card=>card.dataset.projectId===project.id).querySelector('h3').textContent=title;
    form.querySelector('.save-status').textContent='사이트 파일에 저장했습니다. 이 컴퓨터의 다른 브라우저에서도 반영됩니다. 공유 주소는 재배포가 필요합니다.';
  });
}

function filterProjects(filter) {
  stopAllHoverPreviews();
  let visible = 0;
  document.querySelectorAll(".project-card").forEach((card) => {
    const chosenFormat=document.querySelector('#formatFilter').value;
    const matches = (filter === "all" || card.dataset.category === filter) && (chosenFormat==='all' || card.dataset.format===chosenFormat);
    card.hidden = !matches;
    if (matches) visible += 1;
  });
  count.textContent = visible;
}

projects.forEach((project) => grid.appendChild(createCard(project)));
const formatSelect=document.querySelector('#formatFilter');
const editingFormats=['홍보·브랜드','인터뷰','의료정보·설명','숏폼','홈페이지','사내·행사'].filter(value=>projects.some(p=>p.category==='editing'&&p.format===value));
editingFormats.forEach(value=>{const option=document.createElement('option');option.value=value;option.textContent=value;formatSelect.append(option)});
const subcategories=document.querySelector('#editingSubcategories');
function selectFormat(value){
  formatSelect.value=value;
  subcategories.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.format===value)));
  filterProjects(document.querySelector('.filter.is-active').dataset.filter);
}
[['all','전체'],...editingFormats.map(v=>[v,v])].forEach(([value,label])=>{
  const button=document.createElement('button');button.type='button';button.dataset.format=value;button.textContent=label;button.setAttribute('aria-pressed',String(value==='all'));button.addEventListener('click',()=>selectFormat(value));subcategories.append(button);
});
formatSelect.addEventListener('change',()=>filterProjects(document.querySelector('.filter.is-active').dataset.filter));
filterProjects("planning");

filters.forEach((filterButton) => {
  filterButton.addEventListener("click", () => {
    filters.forEach((button) => {button.classList.remove("is-active"); button.setAttribute('aria-pressed','false');});
    filterButton.classList.add("is-active");
    filterButton.setAttribute('aria-pressed','true');
    formatSelect.value='all';
    subcategories.hidden=filterButton.dataset.filter!=='editing';
    subcategories.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.format==='all')));
    filterProjects(filterButton.dataset.filter);
  });
});

document.querySelector('#exportTitles').addEventListener('click',()=>{
  const url=URL.createObjectURL(new Blob([JSON.stringify({version:1,titles:titleOverrides},null,2)],{type:'application/json'}));
  const link=document.createElement('a');link.href=url;link.download='portfolio-titles.json';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  document.querySelector('#titleStatus').textContent='제목 백업 파일을 저장했습니다.';
});
document.querySelector('#applyTitles').addEventListener('click',async()=>{
  const status=document.querySelector('#titleStatus');
  try{await persistTitles(titleOverrides);status.textContent='현재 제목을 사이트 파일에 반영했습니다. 공유 사이트에는 재배포 시 적용됩니다.';}catch(error){status.textContent=error.message;}
});
document.querySelector('#importTitles').addEventListener('change',async event=>{
  const file=event.target.files[0];if(!file)return;
  try{
    if(file.size>200000)throw Error('파일이 너무 큽니다.');
    const data=JSON.parse(await file.text());if(data.version!==1 || !data.titles || typeof data.titles!=='object' || Array.isArray(data.titles))throw Error('올바른 제목 백업 파일이 아닙니다.');
    const next={...titleOverrides};let applied=0;
    projects.forEach(p=>{const title=data.titles[p.id];if(typeof title==='string' && title.trim() && title.length<=160){next[p.id]=title.trim();applied++;}});
    await persistTitles(next);titleOverrides=next;
    projects.forEach(p=>{if(next[p.id])p.title=next[p.id];});
    stopAllHoverPreviews();hoverControllers.clear();grid.replaceChildren(...projects.map(createCard));filterProjects(document.querySelector('.filter.is-active').dataset.filter);
    document.querySelector('#titleStatus').textContent=`${applied}개 제목을 불러왔습니다.`;
  }catch(error){document.querySelector('#titleStatus').textContent=`불러오지 못했습니다: ${error.message}`;}
  event.target.value='';
});

closeDialog.addEventListener("click", () => dialog.close());
dialog.addEventListener('close', () => { const video=dialog.querySelector('video'); if(video) video.pause(); });
dialog.addEventListener("click", (event) => {
  const bounds = dialog.getBoundingClientRect();
  const clickedBackdrop = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
  if (clickedBackdrop) dialog.close();
});

// Direct case links work independently of the currently selected category.
document.querySelectorAll('[data-open-project]').forEach(link=>{
  link.addEventListener('click',event=>{
    const project=projects.find(p=>p.id===link.dataset.openProject);
    if(project){event.preventDefault();openProject(project);}
  });
});

// The opening showcase presents five complementary strengths without duplicating the full archive.
const heroSelectedButtons=[...document.querySelectorAll('[data-hero-project]')];
const heroSelectedStage=document.querySelector('.hero-selected-stage');
const heroSelectedImage=document.querySelector('#heroSelectedImage');
const heroSelectedPreview=document.querySelector('#heroSelectedPreview');
const heroSelectedBadge=document.querySelector('#heroSelectedBadge');
const heroSelectedTitle=document.querySelector('#heroSelectedTitle');
const heroProjectImage=project=>project.image||(project.videoId?`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`:'');
function stopHeroPreview(){
  heroSelectedPreview.pause();heroSelectedStage.classList.remove('is-previewing');
  heroSelectedPreview.currentTime=0;
}
function selectHeroProject(projectId){
  const project=projects.find(p=>p.id===projectId);
  if(!project)return;
  stopHeroPreview();
  heroSelectedButtons.forEach(button=>button.classList.toggle('is-active',button.dataset.heroProject===projectId));
  heroSelectedStage.dataset.heroOpen=projectId;
  heroSelectedStage.setAttribute('aria-label',`${project.title} 상세 보기`);
  heroSelectedImage.src=heroProjectImage(project);
  heroSelectedImage.alt=`${project.title} 대표 이미지`;
  heroSelectedBadge.textContent=project.badge;
  heroSelectedTitle.textContent=project.title;
  heroSelectedStage.classList.toggle('has-preview',Boolean(project.hoverPreview));
  if(project.hoverPreview)heroSelectedPreview.src=project.hoverPreview;
  else heroSelectedPreview.removeAttribute('src');
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    heroSelectedStage.animate([{opacity:.72,transform:'translateY(3px)'},{opacity:1,transform:'translateY(0)'}],{duration:260,easing:'ease-out'});
  }
}
heroSelectedButtons.forEach(button=>{
  const select=()=>selectHeroProject(button.dataset.heroProject);
  button.addEventListener('pointerenter',select);
  button.addEventListener('focus',select);
  button.addEventListener('click',()=>{
    const project=projects.find(p=>p.id===button.dataset.heroProject);
    if(project)openProject(project);
  });
});
heroSelectedStage.addEventListener('pointerenter',()=>{
  if(!heroSelectedStage.classList.contains('has-preview')||window.matchMedia('(prefers-reduced-motion: reduce)').matches||window.matchMedia('(hover: none)').matches)return;
  heroSelectedPreview.play().then(()=>heroSelectedStage.classList.add('is-previewing')).catch(stopHeroPreview);
});
heroSelectedStage.addEventListener('pointerleave',stopHeroPreview);
heroSelectedStage.addEventListener('click',()=>{
  stopHeroPreview();
  const project=projects.find(p=>p.id===heroSelectedStage.dataset.heroOpen);
  if(project)openProject(project);
});
selectHeroProject('11');

// Content stays visible without JS/observer support and for reduced-motion users.
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
if('IntersectionObserver' in window && !reducedMotion.matches){
  const revealObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('is-revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  },{threshold:0.08,rootMargin:'0px 0px -20px 0px'});
  document.querySelectorAll('.hero .eyebrow,.hero-copy,.hero-selected,.credibility>div,.feedback-heading,.feedback-card,.section-heading,.approach-grid article,.approach>.ai-capability,.disclosure>div,footer h2,.contact-intro').forEach((element,i)=>{
    element.classList.add('scroll-reveal');
    element.style.setProperty('--reveal-delay',`${Math.min(i%3,2)*65}ms`);
    revealObserver.observe(element);
  });
  reducedMotion.addEventListener('change',event=>{
    if(event.matches){revealObserver.disconnect();document.querySelectorAll('.scroll-reveal').forEach(el=>el.classList.add('is-revealed'));}
  });
}
