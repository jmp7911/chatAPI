<h1>드라마 스토브리그 명대사 서비스</h1>
<ul>
  <li>
    단장 백승수의 명대사를 모아 제공합니다.
  </li>
</ul>
<h2>목차</h2>
<ol>
  <li><a href="#m1">기획 및 배포</a></li>
  <li><a href="#m2">UI</a></li>
  <li><a href="#m3">기능</a></li>
  <li><a href="#m4">개발하면서 느낀점</a></li>
</ol>
<h2 id="m1">1. 기획 및 배포</h2>
<h3>1-1. 기획</h3>
<ul>
  <li>
    드라마의 장면이나 특정 대사를 검색해서 찾아주는 서비스 입니다.
  </li>
</ul>
<h3>1-2. 배포URL</h3>
<ul>
  <li>
    <a href="https://jmp7911.github.io/chatAPI/">https://jmp7911.github.io/chatAPI/</a>
  </li>
</ul>

<h2 id="m2">2. UI</h2>

![UI](https://github.com/jmp7911/chatAPI/assets/37658328/623399cc-bbc3-4d70-a7c5-a1c79c633bc1)
<ol>
  <li>
    레이아웃은 크게 3부분으로 검색,검색결과, 검색기록 영역이 있습니다.
  </li>
</ol>

![제목 없는 디자인](https://github.com/jmp7911/chatAPI/assets/37658328/cbe39844-a59d-4468-99b0-d552523c0733)

<h2 id="m3">3. 기능</h2>
<h3>3-1. 대사 검색(GPT API 연동)</h3>
<ul>
  <li>
    chatGPT의 정보 중에 드라마의 명대사 정보가 있을 줄 알았는데 결과가 없었습니다.
  </li>
  <li>
    명대사 텍스트를 미리 코드에서 한번 넣어두고 대사를 요청했습니다.
  </li>
</ul>

![](https://github.com/jmp7911/chatAPI/assets/37658328/eed46199-7b5c-42d2-9114-870c2863ebc4)
<h3>3-2. 검색기록</h3>
<ul>
  <li>
    검색 텍스트와 응답 텍스트를 로컬스토리지에 기록하였습니다.
  </li>
  
![search_history 키 값에 JSON객체 배열로 검색텍스트, 응답을 기록](https://github.com/jmp7911/chatAPI/assets/37658328/63901c5e-4f5e-4768-9749-79d124d3ce15)
<span stlye="text-color:#bbb">[* search_history 키 값에 JSON객체 배열로 검색텍스트, 응답을 기록]<span>
</ul>

<h3 id="m4">4. 개발을 마치고 느낀 점</h2>
<ul>
  <li>
    드라마의 대사정보는 GPT의 데이터베이스에 존재하지 않아서 대사가 들어있는 긴 텍스트를 같이 요청해야 했습니다
    그러다 보니 요청할 수 있는 텍스트의 길이를 초과하여서 더 이상 대사를 추가할 수 없었던 점이 아쉬웠습니다
  </li>
  <li>
    GPT API로 서비스를 만듦으로써 프롬프트 엔지니어링 개념을 학습할 수 있었습니다.
  </li>
</ul>
