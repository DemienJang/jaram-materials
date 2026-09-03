# 교육자료 아카이브 이관 기록

## 이관 정보

- 이관일: 2026-09-03
- 원본 위치: `C:\Users\adona\OneDrive\Desktop\blog\materials`
- 이관 위치: `outputs/materials/`
- 이관 방식: 원본 폴더 전체를 합치지 않고, 최종 HTML 산출물과 운영에 필요한 공유 파일만 선별 복사

## 이관 파일

- `index.html`: 교육자료 및 워크북 누적 관리 페이지
- `LOG.md`: 기존 생성 이력
- `assets/styles.css`: 교육자료/워크북 공용 스타일
- `assets/workbook.js`: 메모 저장, 진행률, 인쇄 등 공용 동작
- `education/education-winnicott-discipline.html`: 교육자료 · 01
- `education/education-time-horizon-trust.html`: 교육자료 · 02
- `education/education-first-evidence-career.html`: 교육자료 · 03
- `workbook/workbook-smartphone-rhythm.html`: 워크북 · 01
- `workbook/workbook-first-evidence-career.html`: 워크북 · 02
- `workbook/workbook-anxiety-listening.html`: 워크북 · 03

## 이관하지 않은 항목

- 원본 폴더의 `.git/`: 별도 저장소 메타데이터이므로 통합 프로젝트에는 이관하지 않음
- 별도 중간 작업 파일: 원본 폴더 안에서 발견되지 않음

## 콘텐츠 연결

- `contents/001-child-aggression-adult/04_edu_material.md`
- `contents/002-time-horizon-trust/04_edu_material.md`
- `contents/003-smartphone-life-rhythm/04_edu_material.md`
- `contents/004-ai-career-first-evidence/04_edu_material.md`
- `contents/005-anxiety-before-listening/04_edu_material.md`

## 운영 메모

- 새 교육자료는 블로그 글을 먼저 읽고 교육자료형 또는 워크북형 중 더 적합한 형식을 판단한다.
- 교육자료형은 `$jaram-education-material`, 워크북형은 `$jaram-participatory-workbook` 기준을 따른다.
- 생성 후 `outputs/materials/index.html`에 누적하고, 같은 작업 흐름 안에서 Git 커밋까지 진행한다.
