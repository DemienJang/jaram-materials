# Naver Blog Operation

장재식 네이버 블로그 통합 운영을 위한 로컬 작업 폴더입니다.

이 프로젝트는 블로그 글 작성, 글감 탐색, 스레드 작성, 카드뉴스 제작, 교육자료 제작, 타이틀 이미지 기획, 게시 일정 관리를 하나의 폴더 안에서 콘텐츠별로 운영하기 위해 만들었습니다.

## 핵심 원칙

- 작업은 기능별이 아니라 콘텐츠별로 관리합니다.
- 하나의 콘텐츠는 하나의 폴더 안에서 관리합니다.
- 블로그 글은 원천 콘텐츠입니다.
- 스레드, 카드뉴스, 교육자료, 타이틀 이미지는 블로그 글에서 파생됩니다.
- 프로젝트 지침은 설정창이 아니라 `AGENTS.md`와 `guides/` 파일로 관리합니다.

## 기본 구조

```text
AGENTS.md
README.md
guides/
contents/
templates/
outputs/
archive/
```

## 작업 시작 방법

1. `AGENTS.md`를 확인합니다.
2. `guides/00_MASTER_GUIDE.md`를 확인합니다.
3. 작업 유형에 맞는 세부 가이드를 읽습니다.
4. `contents/` 아래에 콘텐츠별 폴더를 만들고 `00_brief.md`부터 작성합니다.
5. 블로그 글과 파생 콘텐츠를 같은 폴더 안에서 이어서 제작합니다.

## 콘텐츠 폴더 예시

```text
contents/001-sample-content/
├─ 00_brief.md
├─ 01_blog.md
├─ 02_threads.md
├─ 03_cardnews.md
├─ 04_edu_material.md
├─ 05_image_prompt.md
└─ output/
```
