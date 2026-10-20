# 독립 호스팅 배포 안내

## 권장 대상: Cloudflare Pages

이 사이트는 서버 기능이 필요 없는 정적 HTML/CSS/JavaScript 프로젝트입니다. 배포 결과는 `dist/`에 생성됩니다.

- Build command: `npm run build`
- Build output directory: `dist`
- 권장 프로젝트 이름: `jaeyong-portfolio` 또는 `jaeyonghong`
- 기본 공개 주소: `https://<project-name>.pages.dev`

Git 연동 배포를 사용하면 저장소에 변경 사항을 push할 때마다 자동으로 다시 배포됩니다. 비공개 GitHub 저장소도 연결할 수 있습니다.

## 로컬 검증

```powershell
npm run check
python -m http.server 4174 --directory dist
```

브라우저에서 `http://127.0.0.1:4174`를 엽니다.

## Cloudflare Pages 설정

1. Cloudflare 계정에서 Workers & Pages를 엽니다.
2. GitHub 저장소를 연결합니다.
3. 프로젝트 이름, 빌드 명령, 출력 폴더를 위 값으로 입력합니다.
4. 첫 배포 후 PC, 모바일, 시크릿 창에서 페이지와 영상을 확인합니다.
5. 추후 Pages 프로젝트의 Custom domains에서 개인 도메인을 연결합니다.

## Vercel 대안

`vercel.json`을 포함해 Git 연동 빌드는 가능하도록 준비했습니다. 다만 현재 정적 자산이 약 240MB라 Hobby 요금제의 CLI 소스 업로드 100MB 제한을 초과합니다. Vercel을 사용할 때는 Git 연동 빌드를 사용하거나 영상을 별도 스토리지로 분리해야 합니다.

## ChatGPT Sites 의존성

공개 빌드에는 `.openai/hosting.json`이나 ChatGPT Sites 주소가 포함되지 않습니다. `/api/titles`는 로컬 제목 편집 서버에서만 호출되며 공개 사이트에서는 제목 관리 UI가 숨겨집니다.
