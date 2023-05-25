import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import fetchContentMarkdown from '../../util/fetchContentMarkdown';

interface ContentLoaderProps {
  id: string
}

function ContentLoader(props: ContentLoaderProps) {

  const [content, setContent] = useState("");

  useEffect(() => {
    fetchContentMarkdown(props.id)
      .then(text => setContent(text));
  });

  return (
    <ReactMarkdown>{content}</ReactMarkdown>
  );
}

export default ContentLoader;
