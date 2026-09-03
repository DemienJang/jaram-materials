# Guide Changelog

이 파일은 `guides/` 폴더에 있는 운영 가이드들의 수정 이력을 한 곳에 누적 관리하기 위한 문서다.

가이드를 수정할 때는 수정 일시, 수정 대상, 수정 의도, 수정 내용, 관련 콘텐츠, 다음 점검 사항을 함께 기록한다. 단순 오탈자 수정처럼 운영 기준에 영향을 주지 않는 변경은 필요할 때만 간단히 기록한다.

## 2026-09-03

### 수정 대상

- `guides/03_CARDNEWS_GUIDE.md`
- `templates/cardnews/typographic-cardnews/`
- `outputs/cardnews/legacy/`

### 수정 의도

통합 프로젝트 이전에 `Desktop/blog/card news` 폴더에서 제작했던 카드뉴스 산출물과 재사용 템플릿을 현재 프로젝트의 카드뉴스 운영 구조로 선별 이관하기 위해서다.

### 수정 내용

- `typographic-cardnews` 기반 HTML 템플릿을 `templates/cardnews/typographic-cardnews/`로 이관했다.
- 완성 카드뉴스 산출물을 `outputs/cardnews/legacy/` 아래로 선별 복사했다.
- 원본 작업 폴더의 `.git`, `.pnpm-store`, `node_modules`, `.next`, `.wrangler`, `.vinext`, 서버 빌드 파일, 개발 설정 파일은 이관하지 않았다.
- `outputs/cardnews/legacy/README.md`에 이관 목록, 원본 위치, 버전 후보를 기록했다.
- `guides/03_CARDNEWS_GUIDE.md`에 `typographic-cardnews` 사용 기준과 이관 산출물 위치를 추가했다.

### 관련 콘텐츠

- AI 시대, 진로교육은 첫 증거 만들기다
- 불안을 없애려 하기 전에
- 나는 네 다음이 될 것이다
- 아무것도 숭배하지 않는 사람은 없다
- 스마트폰을 빼앗기 전에
- 그러므로, 어떻게 살 것인가
- 기다림보다 신뢰가 먼저다

### 다음 점검 사항

- 블로그 원문 이관 시 각 카드뉴스를 해당 콘텐츠 폴더의 `output/cardnews/`로 연결한다.
- 같은 제목의 복수 버전은 원문과 비교한 뒤 최종본을 결정한다.

---

### 수정 대상

- `AGENTS.md`
- `guides/00_MASTER_GUIDE.md`
- `guides/08_LEGACY_IMPORT_GUIDE.md`
- `incoming/README.md`
- `.gitignore`

### 수정 의도

통합 프로젝트를 만들기 전에 이미 생성된 5개의 콘텐츠를 향후 참고와 이력 관리를 위해 가져오되, 원본 폴더를 그대로 섞지 않고 필요한 파일만 선별 이관하는 기준이 필요했다.

### 수정 내용

- 이전 콘텐츠 이관 전용 가이드 `guides/08_LEGACY_IMPORT_GUIDE.md`를 추가했다.
- 임시 보관 구역 `incoming/`의 역할을 설명하는 `incoming/README.md`를 추가했다.
- `incoming/` 안의 원본 임시 파일이 실수로 관리 대상에 포함되지 않도록 `.gitignore`를 추가했다.
- `AGENTS.md`의 작업 유형별 읽기 목록에 이전 콘텐츠 이관 가이드를 추가했다.
- `guides/00_MASTER_GUIDE.md`에 이전 콘텐츠 이관 원칙과 `incoming/` 구조를 추가했다.

### 관련 콘텐츠

- 통합 프로젝트 생성 전 작성된 기존 콘텐츠 5개

### 다음 점검 사항

- 사용자가 이전 콘텐츠 원본 폴더 경로를 제공하면 파일 목록을 확인하고 5개 콘텐츠 단위로 분류한다.
- 각 콘텐츠별로 `00_brief.md`를 먼저 만들고, 필요한 원고와 파생 자료만 현재 표준 파일명으로 복사한다.

---

### 수정 대상

- `guides/01_BLOG_STYLE_GUIDE.md`
- `guides/00_MASTER_GUIDE.md`

### 수정 의도

첫 번째 블로그 초안을 작성하고 기존 문체와 비교해보니, 주제가 먼저 주어지는 글에서 설명문처럼 흐르는 경향이 확인되었다. 장재식 블로그 문체처럼 작은 장면과 질문에서 출발하도록 블로그 스타일 가이드에 보완 기준이 필요했다.

또한 앞으로 블로그, 스레드, 카드뉴스, 교육자료, 타이틀 이미지 등 여러 가이드가 계속 수정될 가능성이 있어, 각 가이드마다 체인지로그를 두기보다 통합 변경 이력 파일 하나에 누적 관리하는 원칙이 필요했다.

### 수정 내용

- `guides/01_BLOG_STYLE_GUIDE.md`에 `주제형 글을 쓸 때의 보완 기준` 섹션을 추가했다.
- 스마트폰, AI, 진로, 습관처럼 주제가 먼저 주어지는 글도 작은 장면에서 시작하도록 명시했다.
- 도파민, AI, 시간의 지평선, 아들러 심리학, 신학 개념 등은 글의 주인이 아니라 경험을 해석하는 도구로 뒤늦게 등장해야 한다는 기준을 추가했다.
- 방법 제시는 정리형 구조보다 관찰과 질문 끝에 생긴 작은 가능성으로 제시하도록 보완했다.
- `guides/00_MASTER_GUIDE.md`의 핵심 원칙에 모든 가이드 수정 이력을 `guides/00_GUIDE_CHANGELOG.md`에 누적 기록한다는 원칙을 추가했다.
- `guides/00_MASTER_GUIDE.md`의 기본 작업 순서에 가이드 수정 시 변경 이력을 기록하는 단계를 추가했다.

### 관련 콘텐츠

- `contents/2026-09-dopamine-wanting-liking/01_blog.md`
- `contents/2026-09-dopamine-wanting-liking/00_brief.md`

### 다음 점검 사항

- 블로그 글을 몇 편 더 작성한 뒤, 소제목 기준과 결말 기준을 추가로 보완할지 검토한다.
- 다른 산출물 가이드가 수정될 때도 이 파일에 변경 이력을 누적 기록한다.
