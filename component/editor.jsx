import { Editor } from "novel";


export default function NovelEditor({ setContent, content, title }) {
  return (
    <div className="">
        <h2 className="pt-4 pb-3">{title}</h2>
        <Editor
          defaultValue={{
            type: "doc",
            content: [],
          }}
          disableLocalStorage={true}
          className="rounded-md border shadow-none"
        />
    </div>
  );
}