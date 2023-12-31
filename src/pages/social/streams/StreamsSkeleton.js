import PostFormSkeleton from '@components/posts/post-form/PostFormSkeleton';
import PostSkeleton from '@components/posts/post/PostSkeleton';
import SuggestionsSkeletons from '@components/suggestions/SuggestionsSkeleton';

const StreamsSkeleton = () => {
  return (
    <div className="streams">
      <div className="streams-content">
        <div className="streams-post">
          <PostFormSkeleton />
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index}>
              <PostSkeleton />
            </div>
          ))}
        </div>
        <div className="streams-suggestions">
          <SuggestionsSkeletons />
        </div>
      </div>
    </div>
  );
};

export default StreamsSkeleton;
