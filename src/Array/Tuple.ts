// 튜플

// 튜플에는 주로 타입 별칭으로 튜플의 의미를 명확하게 한다
{
  type resultType = [boolean, string];

  const doSometing = (): resultType => {
    try {
      throw new Error("Some error occurs...");
    } catch (e) {
      if (e instanceof Error) {
        return [false, e.message];
      } else {
        return [false, String(e)];
      }
    }
  };
}
