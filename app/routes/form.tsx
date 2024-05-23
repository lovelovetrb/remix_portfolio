import type { V2_MetaFunction } from "@remix-run/node";
import Background from "~/components/Background";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "@lovelovetrb" },
    {
      name: "description",
      content: "@lovelovetrb portfolio page build with remix",
    },
  ];
};

type formContent = {
  name: string;
  email: string;
  body: string;
};

export default function Index() {
  const googleFormFetch = async (formContent: formContent) => {
    await fetch(
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfZQZGFQcOIj74-C-nGznPnCatKjrrTMskVxnpKOtP4IA5ZFg/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `entry.1318356055=${formContent.name}&entry.1295676376=${formContent.email}&entry.1428027242=${formContent.body}`,
      },
    )
      .then(() => {
        alert("送信しました");
      })
      .catch((err) => alert(`エラーが発生しました: ${err}`));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formContent: formContent = {
      name: encodeURIComponent(e.currentTarget[0].value),
      email: encodeURIComponent(e.currentTarget[1].value),
      body: encodeURIComponent(e.currentTarget[2].value),
    };
    console.log(formContent);
    googleFormFetch(formContent);
    e.currentTarget.reset();
  };

  return (
    <>
      <Background styleName="none">
        <h2 className="lg:text-5xl md:text-3xl text-xl m-5">Contact</h2>
        <div className="bg-white bg-opacity-20 rounded-lg mx-auto p-5">
          <form className="form" onSubmit={submitHandler}>
            <p className="my-3 text-xl">お名前</p>
            <div className="row">
              <input
                type="text"
                className="w-full"
                placeholder="◯◯ ◯◯"
                required
              />
            </div>
            <p className="my-3 text-xl">メールアドレス</p>
            <div className="row">
              <input
                type="email"
                className="w-full"
                placeholder="example@example.com"
                required
              />
            </div>
            <p className="my-3 text-xl">本文</p>
            <div className="row">
              <textarea
                className="w-full h-[10em]"
                placeholder="お問い合わせ内容"
                required
              />
            </div>
            <div className="text-center">
              <input
                className="bg-white bg-opacity-60 rounded-xl mt-3 py-3 px-5 text-black"
                type="submit"
                value="送信"
              />
            </div>
          </form>
        </div>
      </Background>
    </>
  );
}
