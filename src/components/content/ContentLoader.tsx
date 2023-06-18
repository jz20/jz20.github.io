import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import fetchContentMarkdown from '../../util/fetchContentMarkdown';
import "./ContentLoader.css";

interface ContentLoaderProps {
  topicId: string,
  sectionId: string
}

function ContentLoader(props: ContentLoaderProps) {

  const [content, setContent] = useState("");
  const id = `${props.topicId}_${props.sectionId}`;

  useEffect(() => {
    fetchContentMarkdown(id)
      .then(text => setContent(text));
  });

  const components = {
    img: (
      {alt, src, title}: {alt?: string, src?: string, title?:string}
    ) => 
      <div className="markdown-img-wrapper">
        <img alt={alt} src={src} title={title} className="markdown-img"/>
      </div>
  }

  return (
    <ReactMarkdown components={components}>{content}</ReactMarkdown>
  );
}

export default ContentLoader;
