# Guide Changelog

이 파일은 `guides/` 폴더에 있는 운영 가이드들의 수정 이력을 한 곳에 누적 관리하기 위한 문서다.

가이드를 수정할 때는 수정 일시, 수정 대상, 수정 의도, 수정 내용, 관련 콘텐츠, 다음 점검 사항을 함께 기록한다. 단순 오탈자 수정처럼 운영 기준에 영향을 주지 않는 변경은 필요할 때만 간단히 기록한다.

## 2026-09-03

### 수정 대상

- `contents/2026-08-child-aggression-adult/00_brief.md`
- `contents/2026-08-child-aggression-adult/output/cardnews/child-aggression-adult/`

### 수정 의도

사용자가 직접 복사한 `아이의 공격성을 버텨주는 어른` 카드뉴스 완성 이미지를 해당 발행 블로그 콘텐츠와 연결하기 위해서다.

### 수정 내용

- `output/cardnews/child-aggression-adult/export/`에 있는 JPG 카드뉴스 8장을 확인했다.
- 모든 이미지가 1080 x 1350 규격임을 확인했다.
- `00_brief.md`의 카드뉴스 상태를 `연결된 기존 카드뉴스 없음`에서 `완성 이미지 8장 연결 완료`로 수정했다.
- 카드뉴스 폴더에 `README.md`를 추가해 원천 글, 위치, 형식, 장수, HTML 원본 부재를 기록했다.

### 관련 콘텐츠

- 아이의 공격성을 버텨주는 어른

### 다음 점검 사항

- HTML/CSS/JS 제작 원본이 별도로 있으면 추후 같은 카드뉴스 폴더에 선별 이관할지 검토한다.

---

### 수정 대상

- `contents/2026-08-time-horizon-trust/output/cardnews/`
- `contents/2026-08-smartphone-life-rhythm/output/cardnews/`
- `contents/2026-08-ai-career-first-evidence/output/cardnews/`
- `contents/2026-09-anxiety-before-listening/output/cardnews/`
- `contents/*/00_brief.md`
- `outputs/cardnews/legacy/README.md`

### 수정 의도

발행된 블로그 포스트를 원천 콘텐츠로 삼는 원칙에 맞춰, 기존 카드뉴스 산출물 중 실제 발행 글과 직접 연결되는 것만 콘텐츠별 폴더 안으로 옮기기 위해서다.

### 수정 내용

- `time-horizon-trust-v2`를 `2026-08-time-horizon-trust` 콘텐츠의 카드뉴스 산출물로 복사했다.
- `smartphone-life-rhythm-flow`를 `2026-08-smartphone-life-rhythm` 콘텐츠의 카드뉴스 산출물로 복사했다.
- `ai-career-first-evidence`를 `2026-08-ai-career-first-evidence` 콘텐츠의 카드뉴스 산출물로 복사했다.
- `anxiety-before-listening-cardnews`를 `2026-09-anxiety-before-listening` 콘텐츠의 카드뉴스 산출물로 복사했다.
- `2026-08-child-aggression-adult`는 직접 연결되는 기존 카드뉴스가 없어 새 제작 필요로 기록했다.
- 복수 버전이 있는 경우 PNG 내보내기와 수정 시점을 기준으로 콘텐츠 폴더에 둘 후보를 선택하고, 나머지는 `outputs/cardnews/legacy/`에 보류 후보로 남겼다.

### 관련 콘텐츠

- 아이의 공격성을 버텨주는 어른
- 마시멜로 테스트와 시간의 지평선
- 스마트폰을 빼앗기 전에, 아이가 무엇을 잃고 있는지 봐야 한다
- AI 시대, 진로교육은 직업 선택보다 첫 증거 만들기다
- 불안을 없애려 하기 전에, 먼저 들어야 할 때가 있다

### 다음 점검 사항

- 각 콘텐츠 폴더에 옮긴 카드뉴스가 블로그 원문 흐름과 실제로 일치하는지 최종 검수한다.
- 직접 연결 카드뉴스가 없는 `아이의 공격성을 버텨주는 어른`은 필요 시 새 카드뉴스로 제작한다.

---

### 수정 대상

- `contents/2026-08-child-aggression-adult/`
- `contents/2026-08-time-horizon-trust/`
- `contents/2026-08-smartphone-life-rhythm/`
- `contents/2026-08-ai-career-first-evidence/`
- `contents/2026-09-anxiety-before-listening/`

### 수정 의도

이전 카드뉴스 산출물을 먼저 이관했지만, 실제 운영 기준은 발행된 블로그 글이어야 한다는 점을 반영하기 위해 사용자가 제공한 Naver 블로그 포스트 5개를 원천 콘텐츠로 삼아 콘텐츠별 폴더를 만들었다.

### 수정 내용

- 제공된 발행 포스트 5개를 기준으로 콘텐츠별 폴더를 생성했다.
- 각 폴더에 `00_brief.md`와 `01_blog.md`를 만들었다.
- `01_blog.md`에는 발행본 제목, 원문 링크, 발행일, 카테고리, 본문을 이관했다.
- `00_brief.md`에는 원본 위치, 이관 판단, 발행 정보, 기존 카드뉴스 연결 후보를 기록했다.
- 기존 카드뉴스 중 실제 발행 포스트와 직접 연결되는 후보를 각 브리프에 표시했다.

### 관련 콘텐츠

- 아이의 공격성을 버텨주는 어른
- 마시멜로 테스트와 시간의 지평선
- 스마트폰을 빼앗기 전에, 아이가 무엇을 잃고 있는지 봐야 한다
- AI 시대, 진로교육은 직업 선택보다 첫 증거 만들기다
- 불안을 없애려 하기 전에, 먼저 들어야 할 때가 있다

### 다음 점검 사항

- 각 콘텐츠 폴더의 `output/cardnews/`로 발행 글과 연결되는 카드뉴스 최종본을 옮기거나 연결한다.
- 발행되지 않은 카드뉴스 산출물은 별도 후보 또는 보류 자료로 정리한다.

---

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
