// دي الفنكسن علشا ن نعمل توريث علشان الايرور بياخد رساله بس علشان نبعت حاله الكود

class appErorr extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export { appErorr };
