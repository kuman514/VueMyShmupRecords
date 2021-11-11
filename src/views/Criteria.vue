<template>
  <div class="criteria">
    <h1>Record Criteria (기록 기준)</h1>
    My plays that I at least 1-ALLed without continues and meet one of conditions below.<br>
    (컨티뉴 없이 1-ALL 이상을 달성하였으며 다음 중 하나를 만족한 기록이 등록되어 있습니다.)
    <ul class="aligning-criteria">
      <li>
        Plays on an authentic arcade PCB (ex: Akatronics, Bucheon Sinjungdong)<br>
        (정품 아케이드 기판을 사용한 오락실에서 플레이 (ex: 부천 신중동 아카트로닉스))
      </li>
      <li>
        Plays Steam shmups I have<br>
        (Steam에서 보유 중인 게임을 플레이)
      </li>
      <li>
        Plays on Arcade Archives or Capcom Arcade Stadium<br>
        (Arcade Archives나 Capcom Arcade Stadium 등등에서 플레이)
      </li>
      <li>
        And other plays on authentic stuffs (ex: Ketsui Deathtiny on PS4)<br>
        (이외의 정품 플레이 기록 (ex: 케츠이 Deathtiny PS4판))
      </li>
    </ul>
    <h2>Terms (용어 설명)</h2>
    <ul class="term-description">
      <li>
        Continue (컨티뉴)<br>
        Keeping playing a game with additional credits when you ran out of lives.<br>
        (라이프를 모두 소진하였을 때, 크레딧을 추가 투자하여 진행 중인 게임을 계속하는 기능.)
      </li>
      <li>
        1-ALL<br>
        Completing the first loop in the game. At this time, commonly, you advance to the second loop. In some games, such as Dodonpachi and Ketsui, which have special second loop entry conditions, if you didn't meet them, the game ends at the first loop and marks only as the last stage number. If a game has only one loop, it can be called "ALL" too.<br>
        (게임을 1주 클리어(한 바퀴 완주)한다는 뜻. 이 때 2주로 진출하게 되는데, 특수한 진출 조건이 존재하는 도돈파치나 케츠이 등등 일부 게임에서는 2주 조건 불만족으로 1주에서 끝나면 마지막 스테이지 넘버로만 표기됨. 한 바퀴로만 끝나는 게임에서는 "ALL"로도 표기될 수 있음.)
      </li>
    </ul>
  </div>
</template>

<style scoped>
li {
  margin: 10px;
}

.criteria {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.aligning-criteria, .term-description {
  text-align: left;
  max-width: 700px;
}
</style>
