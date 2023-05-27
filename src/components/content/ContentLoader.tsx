import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import fetchContentMarkdown from '../../util/fetchContentMarkdown';

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

  return (
    <ReactMarkdown>{content}</ReactMarkdown>
  );
}

export default ContentLoader;
