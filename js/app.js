const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`

const $input = document.querySelector('input')
const $submit = document.querySelector('.submit')
const $wording = document.querySelector('.wording')

const data = []
data.push({
  "role": "system",
  "content": "assistant는 SBS 드라마 스토브리그의 대사를 작성한 작가입니다."
}, {
  "role": "user",
  "content": "등장인물 백승수에 대해 알려줘"
}, {
  "role": "assistant",
  "content": ``
}
)


$submit.addEventListener('click', e => {
  console.log('click')
  e.preventDefault()
  
  const contents = `"${$input.value}"에 대한 응답은 등장인물 백승수가 말하는 것 처럼 해줘. 결과는 문장을 제외하고 json으로 해줘`
  data.push({
      "role": "user",
      "content": contents
  })
  $input.value = ''

  chatGPTAPI()
})

function chatGPTAPI() {
  fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
      redirect: 'follow'
  })
  .then(res => res.json())
  .then(res => {
      console.log(res)
      // 답변 온 것을 assistant로 저장
      $wording.innerHTML = `${res.choices[0].message.content}`
  })
}
