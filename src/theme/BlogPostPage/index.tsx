import React, {type ReactNode} from 'react';
import BlogPostPage from '@theme-original/BlogPostPage';
import type BlogPostPageType from '@theme/BlogPostPage';
import type {WrapperProps} from '@docusaurus/types';
import LetterSpacingSlider from '@site/src/components/LetterSpacingSlider';

type Props = WrapperProps<typeof BlogPostPageType>;

const TAILSCALE_SLUG = 'announcing-tailscale-integration';

export default function BlogPostPageWrapper(props: Props): ReactNode {
  const slug = (props as any)?.content?.metadata?.frontMatter?.slug ?? '';
  const showSlider = slug === TAILSCALE_SLUG;

  return (
    <>
      {showSlider && <LetterSpacingSlider />}
      <BlogPostPage {...props} />
    </>
  );
}
