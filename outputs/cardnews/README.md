# 카드뉴스 아카이브

## 운영 구조

- 대표 갤러리: `outputs/cardnews/index.html`
- 발행 콘텐츠 최종 이미지: 각 `contents/*/output/cardnews/` 폴더
- 이전 제작 원본 및 후보: `outputs/cardnews/legacy/`
- 재사용 템플릿: `templates/cardnews/typographic-cardnews/`

## 정리 원칙

- 콘텐츠 폴더에는 최종 업로드용 카드 이미지와 README만 둔다.
- HTML/CSS/JS 제작 원본, 보조 이미지, 디자인 문서는 콘텐츠 폴더에 중복 보관하지 않는다.
- 전체 열람과 보관용 확인은 `outputs/cardnews/index.html`에서 한다.
- 발행되지 않았거나 버전 판단이 남은 자료는 `outputs/cardnews/legacy/`에 둔다.
