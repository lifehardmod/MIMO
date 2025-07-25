import CardMeetingView from './CardMeetingView';
import { TagProps } from '@/components/atoms/Tag/Tag';
import { ThumbnailProps } from './../Thumbnail/Thumbnail.view';
import getDisplayedTags from '@/utils/filterTagsByLength';

/**
 * CardMeeting 컴포넌트의 props 타입 정의
 */
export interface CardMeetingProps {
    /** 미팅 카드의 썸네일 이미지 */
    image: ThumbnailProps;
    /** 별점 (평점) */
    reviewScore: number;
    reviewCount: number;
    /** 태그 리스트 */
    tagList: TagProps[];
    /** 미팅 카드의 설명 또는 내용 */
    content: string;
    /** 미팅 카드의 제목 또는 라벨 */
    label: string;
    /** 카드 클릭 시 이동할 링크 (기본값: "/") */
    to?: string;
}

/**
 * 미팅 카드 컴포넌트
 *
 * @param {CardMeetingProps} props - 컴포넌트 props
 * @param {ThumbnailProps} props.image - 썸네일 이미지 정보
 * @param {number} props.rating - 별점 (평점)
 * @param {TagProps[]} props.tagList - 태그 목록
 * @param {string} props.content - 미팅 카드의 설명 또는 내용
 * @param {string} props.label - 미팅 카드 제목
 * @param {string} [props.to] - 카드 클릭 시 이동할 링크 (기본값: "/")
 *
 * @returns {JSX.Element} 미팅 정보를 표시하는 카드 UI
 */
const CardMeeting: React.FC<CardMeetingProps> = ({
    image,
    reviewScore,
    reviewCount,
    tagList,
    content,
    label,
    to = '/', // 기본 링크 경로
}) => {
    const displayedTags = getDisplayedTags(tagList);

    return (
        <CardMeetingView
            image={image}
            reviewCount={reviewCount}
            reviewScore={reviewScore}
            displayedTags={displayedTags}
            content={content}
            label={label}
            to={to}
        />
    );
};

export default CardMeeting;
