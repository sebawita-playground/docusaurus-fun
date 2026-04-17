import React, {type ReactNode} from 'react';
import BlogListPage from '@theme-original/BlogListPage';
import type BlogListPageType from '@theme/BlogListPage';
import type {WrapperProps} from '@docusaurus/types';
import LetterSpacingSlider from '@site/src/components/LetterSpacingSlider';

type Props = WrapperProps<typeof BlogListPageType>;

export default function BlogListPageWrapper(props: Props): ReactNode {
  return (
    <>
      <LetterSpacingSlider />
      <BlogListPage {...props} />
    </>
  );
}
