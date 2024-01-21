const getData = () => {
  const input = document.getElementById("input").value;
  const param = {
    zipcode: input,
  };
  const queryParam = new URLSearchParams(param);

  fetch("https://zipcloud.ibsnet.co.jp/api/search?" + queryParam)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("status").innerHTML = data.status;
      const message = data.status === 200 ? "異常なしです🫡" : data.message;
      document.getElementById("message").innerHTML = message;

      if (data.status !== 200) {
        return;
      }
      const result = data.results[0];
      const address = `${result.address1} ${result.address2} ${result.address3}`;
      const kana = `${result.kana1} ${result.kana2} ${result.kana3}`;
      document.getElementById("address").innerHTML = address;
      document.getElementById("kana").innerHTML = kana;
    });
};
