# 최준혁 · Portfolio

브랜드의 철학과 정체성을 정의하고(**Branding**), 그 경험을 실제 공간으로 구현하는(**Space**) 디자이너 최준혁의 포트폴리오 사이트입니다.

## 구조

순수 HTML / CSS / JS 정적 사이트 — 빌드 과정 없이 바로 호스팅됩니다.

```
.
├── index.html            # 메인 — 히어로 + 두 축 소개 + 대표작
├── branding/index.html   # /branding/ — 브랜드 정체성 / 패키지 / 인쇄물
├── space/index.html      # /space/    — 쇼룸 / 매장 인테리어 / 도면 / 투시도
├── about/index.html      # /about/    — 소개 · 작업 연혁 · 스킬
├── contact/index.html    # /contact/  — 연락처
└── assets/
    ├── css/style.css     # 디자인 시스템 (미니멀 · 에디토리얼)
    ├── js/main.js        # 네비 · 스크롤 리빌 · 라이트박스
    └── img/              # 프로젝트별 실제 작업물 이미지
```

각 메뉴는 개별 디렉토리의 `index.html`로 구성되어 `/branding/`, `/space/` 같은 깔끔한 URL로 접근됩니다.

## 메뉴 / 콘텐츠

- **Branding** — 페르망버터, 브롱스 브루잉, 엘더프랑, 콰르텟이즈·예원(문화공연), 본점 메뉴
- **Space** — 오이코스 쇼룸, 브롱스 매장 인테리어, 엘더프랑 매장 전개

## 로컬 미리보기

```bash
# 정적 파일이라 더블클릭으로 열거나, 간단한 서버로 확인
python -m http.server 8000   # http://localhost:8000
```

## GitHub Pages 배포

Settings → Pages → Source: `main` 브랜치 / `/ (root)` 선택 후 저장하면 게시됩니다.

---

© 2026 최준혁 (Junhyeok Choi).
