# Guide Changelog

이 파일은 `guides/` 폴더에 있는 운영 가이드들의 수정 이력을 한 곳에 누적 관리하기 위한 문서다.

가이드를 수정할 때는 수정 일시, 수정 대상, 수정 의도, 수정 내용, 관련 콘텐츠, 다음 점검 사항을 함께 기록한다. 단순 오탈자 수정처럼 운영 기준에 영향을 주지 않는 변경은 필요할 때만 간단히 기록한다.

## 2026-09-03

### 수정 대상

- `outputs/materials/`
- 교육자료 관련 콘텐츠 기록과 운영 문서

### 수정 의도

`outputs/education/education/`처럼 교육자료 유형명과 아카이브 폴더명이 중복되는 구조를 줄이고, 교육자료와 워크북을 함께 담는 아카이브라는 역할을 폴더명에 반영하기 위해 변경했다.

### 수정 내용

- `outputs/education/`을 `outputs/materials/`로 변경했다.
- 인덱스, 로그, README, 콘텐츠별 `04_edu_material.md`와 브리프의 경로를 갱신했다.
- 하위 구조는 `outputs/materials/education/`과 `outputs/materials/workbook/`으로 유지했다.

### 다음 점검 사항

- 이후 교육자료와 워크북은 모두 `outputs/materials/` 아래에 저장한다.

## 2026-09-03

### 수정 대상

- `AGENTS.md`
- `README.md`
- `guides/00_MASTER_GUIDE.md`
- `guides/08_LEGACY_IMPORT_GUIDE.md`
- `contents/`
- 관련 경로를 포함한 문서 및 인덱스

### 수정 의도

콘텐츠 폴더를 연-월 기준으로 정렬하면 같은 달에 생성된 콘텐츠의 순서를 한눈에 파악하기 어려워, 생성 순서를 폴더 앞부분에 표시하도록 운영 기준을 변경했다.

### 수정 내용

- 콘텐츠 폴더명을 `YYYY-MM-short-topic`에서 `NNN-short-topic` 형식으로 변경했다.
- 기존 6개 콘텐츠에 `001`부터 `006`까지 순번을 부여했다.
- 날짜와 생성일은 `00_brief.md`에서 확인하도록 기준을 분리했다.
- 운영 문서, 카드뉴스·교육자료 인덱스, 콘텐츠 내부 참조 경로를 새 폴더명으로 갱신했다.

### 다음 점검 사항

- 새 콘텐츠 생성 시 가장 큰 순번 다음 번호를 사용한다.
- 순번 변경이 필요한 경우 폴더 이동과 내부 경로 참조를 함께 갱신한다.

## 2026-09-03

### 수정 대상

- `guides/01_BLOG_STYLE_GUIDE.md`
- `contents/006-dopamine-wanting-liking/01_blog.md`

### 수정 의도

블로그 스타일 가이드에는 인용문과 구분선의 권장 개수는 있었지만, 최종 저장 전 실제 적용 여부를 확인하는 절차가 부족했다. 그 결과 이번 블로그 글에서 인용문이 0개로 남고 구분선도 1개만 적용되는 문제가 확인되었다.

### 수정 내용

- `guides/01_BLOG_STYLE_GUIDE.md`에 `편집 장치 최종 점검` 섹션을 추가했다.
- 소제목, 인용문, 볼드, 구분선의 실제 적용 여부를 최종 저장 전 확인하도록 명시했다.
- 인용문이 0개일 때 핵심 질문이나 전환 문장을 인용문 처리할지 반드시 검토하도록 추가했다.
- Markdown 기준으로 인용문은 `>`, 구분선은 `---`, 소제목은 `##`, 볼드는 `**`를 기준으로 가능하면 코드나 검색으로 실제 개수를 확인하도록 했다.
- 이번 블로그 글에 인용문 4개, 구분선 2개, 핵심 개념 중심의 볼드 5쌍이 적용되도록 수정했다.

### 관련 콘텐츠

- `contents/006-dopamine-wanting-liking/01_blog.md`

### 다음 점검 사항

- 다음 블로그 작성부터 게시 전 확인 항목에 편집 장치 실제 계수를 포함한다.
- 네이버 복붙용 파일을 만들 경우 Markdown 편집 장치가 네이버 에디터에서 어떻게 처리되는지도 별도 기준으로 정리한다.

---

### 수정 대상

- `guides/02_THREAD_GUIDE.md`
- `contents/006-dopamine-wanting-liking/02_threads.md`

### 수정 의도

기존 스레드 가이드의 `공백 포함 500자 이내` 기준은 상한만 제시해 실제 작성 시 각 편이 200자대의 짧은 요약문처럼 나오는 문제가 있었다. 스레드는 요약문이 아니라 각 편이 하나의 짧은 글처럼 읽혀야 하므로, 최소 밀도와 최대 길이를 함께 제시할 필요가 있었다.

### 수정 내용

- `guides/02_THREAD_GUIDE.md`의 글자 수 기준을 `공백 포함 500자 이내`에서 `공백 포함 400~450자 이내`로 수정했다.
- 450자를 넘기지 않되, 400자 안팎의 밀도를 기본으로 한다는 설명을 추가했다.
- 변환 순서의 글자 수 확인 기준을 코드로 정확히 확인하도록 수정했다.
- `contents/006-dopamine-wanting-liking/02_threads.md`를 새 기준에 맞춰 다시 작성했다.

### 관련 콘텐츠

- `contents/006-dopamine-wanting-liking/01_blog.md`
- `contents/006-dopamine-wanting-liking/02_threads.md`

### 다음 점검 사항

- 다음 스레드 작성 시 400~450자 기준이 SNS 게시 흐름에 적절한지 확인한다.
- 플랫폼별 권장 길이가 달라질 경우 `기본형`과 `압축형`을 나누는 기준을 추가할지 검토한다.

---

### 수정 대상

- `guides/03_CARDNEWS_GUIDE.md`
- `contents/*/output/cardnews/`
- `outputs/cardnews/index.html`
- `contents/*/00_brief.md`

### 수정 의도

콘텐츠 폴더 이름이 이미 콘텐츠 식별자 역할을 하므로, 카드뉴스 폴더 안에서 콘텐츠 이름을 한 번 더 반복하는 하위 폴더를 제거해 구조를 더 단순하게 만들기 위해서다.

### 수정 내용

- 각 콘텐츠의 카드뉴스 최종 이미지를 `output/cardnews/<cardnews-slug>/`에서 `output/cardnews/` 바로 아래로 이동했다.
- 각 콘텐츠의 카드뉴스 README도 `output/cardnews/README.md`로 이동했다.
- `outputs/cardnews/index.html`의 이미지와 README 링크를 새 경로로 갱신했다.
- `guides/03_CARDNEWS_GUIDE.md`에 콘텐츠별 카드뉴스 폴더에는 추가 하위 폴더를 만들지 않는 원칙을 추가했다.

### 관련 콘텐츠

- 아이의 공격성을 버텨주는 어른
- 마시멜로 테스트와 시간의 지평선
- 스마트폰을 빼앗기 전에, 아이가 무엇을 잃고 있는지 봐야 한다
- AI 시대, 진로교육은 직업 선택보다 첫 증거 만들기다
- 불안을 없애려 하기 전에, 먼저 들어야 할 때가 있다

### 다음 점검 사항

- 앞으로 `output/cardnews/`, `output/images/`, `output/docs/`, `output/etc/` 아래에는 콘텐츠명을 반복하는 하위 폴더를 기본으로 만들지 않는다.

---

### 수정 대상

- `guides/03_CARDNEWS_GUIDE.md`
- `outputs/cardnews/index.html`
- `outputs/cardnews/README.md`
- `outputs/cardnews/legacy/README.md`
- `contents/*/output/cardnews/`
- `contents/*/00_brief.md`

### 수정 의도

카드뉴스도 교육자료처럼 전체 열람용 아카이브 갤러리로 누적 관리하되, 콘텐츠 폴더는 최종 업로드 이미지와 README만 남기는 가벼운 구조로 정리하기 위해서다.

### 수정 내용

- `outputs/cardnews/index.html`을 추가해 발행 콘텐츠 카드뉴스 최종 이미지를 한 페이지에서 볼 수 있게 했다.
- `outputs/cardnews/README.md`를 추가해 카드뉴스 아카이브 운영 구조를 기록했다.
- 콘텐츠 폴더의 카드뉴스 하위에서 `index.html`, `cardnews.css`, `cardnews.js`, `DESIGN-SYSTEM.md`, 보조 `images/`를 제거하고 최종 카드 이미지만 남겼다.
- 기존 `exports/` 또는 `export/` 하위 카드 이미지를 각 카드뉴스 폴더 바로 아래로 이동했다.
- 각 카드뉴스 폴더에 README를 두어 최종 파일 수, 형식, 제작 원본 보관 위치, 전체 갤러리 위치를 기록했다.
- `guides/03_CARDNEWS_GUIDE.md`에 중앙 갤러리와 콘텐츠 폴더 경량화 원칙을 추가했다.

### 관련 콘텐츠

- 아이의 공격성을 버텨주는 어른
- 마시멜로 테스트와 시간의 지평선
- 스마트폰을 빼앗기 전에, 아이가 무엇을 잃고 있는지 봐야 한다
- AI 시대, 진로교육은 직업 선택보다 첫 증거 만들기다
- 불안을 없애려 하기 전에, 먼저 들어야 할 때가 있다

### 다음 점검 사항

- 새 카드뉴스 생성 시 콘텐츠 폴더에는 최종 이미지와 README만 두고, 전체 갤러리에는 새 항목을 추가한다.
- 제작 원본 보관 위치를 `outputs/cardnews/legacy/`로 유지할지, 향후 `outputs/cardnews/projects/` 같은 별도 이름으로 분리할지 검토한다.

---

### 수정 대상

- `guides/04_EDU_MATERIAL_GUIDE.md`
- `outputs/materials/`
- `contents/*/04_edu_material.md`
- `contents/*/00_brief.md`

### 수정 의도

기존 `Desktop/blog/materials` 폴더에서 생성했던 교육자료와 워크북을 통합 프로젝트의 콘텐츠 중심 구조와 누적 인덱스 구조에 맞게 선별 이관하기 위해서다.

### 수정 내용

- `outputs/materials/` 아래에 기존 `materials` 아카이브의 필수 파일만 복사했다.
- 교육자료 HTML 3개와 워크북 HTML 3개를 이관했다.
- `index.html`, `LOG.md`, `assets/styles.css`, `assets/workbook.js`를 함께 이관해 누적 목록과 공용 동작을 유지했다.
- 원본 `materials/.git/`은 이관하지 않았다.
- 각 콘텐츠 폴더에 `04_edu_material.md`를 추가해 교육자료형/워크북형 판단, 원본 위치, 이관 위치를 기록했다.
- `guides/04_EDU_MATERIAL_GUIDE.md`에 교육자료형과 워크북형 판단 기준, 누적 인덱스 관리, 생성 후 커밋 원칙을 추가했다.

### 관련 콘텐츠

- 아이의 공격성을 버텨주는 어른
- 마시멜로 테스트와 시간의 지평선
- 스마트폰을 빼앗기 전에, 아이가 무엇을 잃고 있는지 봐야 한다
- AI 시대, 진로교육은 직업 선택보다 첫 증거 만들기다
- 불안을 없애려 하기 전에, 먼저 들어야 할 때가 있다

### 다음 점검 사항

- 이후 새 블로그 글을 교육자료로 확장할 때 먼저 교육자료형과 워크북형 중 적합한 형식을 판단한다.
- 새 산출물이 생기면 `outputs/materials/index.html`과 해당 콘텐츠의 `04_edu_material.md`를 함께 갱신한다.

---

### 수정 대상

- `contents/001-child-aggression-adult/00_brief.md`
- `contents/001-child-aggression-adult/output/cardnews/child-aggression-adult/`

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

- `contents/002-time-horizon-trust/output/cardnews/`
- `contents/003-smartphone-life-rhythm/output/cardnews/`
- `contents/004-ai-career-first-evidence/output/cardnews/`
- `contents/005-anxiety-before-listening/output/cardnews/`
- `contents/*/00_brief.md`
- `outputs/cardnews/legacy/README.md`

### 수정 의도

발행된 블로그 포스트를 원천 콘텐츠로 삼는 원칙에 맞춰, 기존 카드뉴스 산출물 중 실제 발행 글과 직접 연결되는 것만 콘텐츠별 폴더 안으로 옮기기 위해서다.

### 수정 내용

- `time-horizon-trust-v2`를 `001` 이후 순번인 `002-time-horizon-trust` 콘텐츠의 카드뉴스 산출물로 복사했다.
- `smartphone-life-rhythm-flow`를 `003-smartphone-life-rhythm` 콘텐츠의 카드뉴스 산출물로 복사했다.
- `ai-career-first-evidence`를 `004-ai-career-first-evidence` 콘텐츠의 카드뉴스 산출물로 복사했다.
- `anxiety-before-listening-cardnews`를 `005-anxiety-before-listening` 콘텐츠의 카드뉴스 산출물로 복사했다.
- `001-child-aggression-adult`는 직접 연결되는 기존 카드뉴스가 없어 새 제작 필요로 기록했다.
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

- `contents/001-child-aggression-adult/`
- `contents/002-time-horizon-trust/`
- `contents/003-smartphone-life-rhythm/`
- `contents/004-ai-career-first-evidence/`
- `contents/005-anxiety-before-listening/`

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

- `contents/006-dopamine-wanting-liking/01_blog.md`
- `contents/006-dopamine-wanting-liking/00_brief.md`

### 다음 점검 사항

- 블로그 글을 몇 편 더 작성한 뒤, 소제목 기준과 결말 기준을 추가로 보완할지 검토한다.
- 다른 산출물 가이드가 수정될 때도 이 파일에 변경 이력을 누적 기록한다.
