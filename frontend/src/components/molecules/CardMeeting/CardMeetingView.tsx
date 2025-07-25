// CardMeetingView.tsx
import { Link } from 'react-router-dom';
import Thumbnail from './../Thumbnail/Thumbnail';
import { ThumbnailProps } from './../Thumbnail/Thumbnail.view';
import { RatingStar } from '@/components/atoms';

export interface CardMeetingViewProps {
    /** 썸네일 관련 정보 */
    image: ThumbnailProps;
    /** 평점 (별점 컴포넌트에 전달) */
    reviewScore: number;
    reviewCount: number;
    /** 미리 렌더링된 태그 요소들 */
    displayedTags: React.ReactNode;
    /** 자른 후의 콘텐츠 */
    content: string;
    /** 카드 제목 */
    label: string;
    /** 카드 클릭 시 이동할 링크 (팀 상세 페이지) */
    to: string;
}

const CardMeetingView: React.FC<CardMeetingViewProps> = ({
    image,
    reviewScore,
    reviewCount,
    displayedTags,
    content,
    label,
    to,
}) => {
    return (
        <div className="flex h-[335px] w-[344px] flex-col gap-2 overflow-hidden rounded-2xl bg-white">
            {/* 카드의 클릭 영역: 썸네일, 제목, 내용 등이 포함 */}
            <Link to={to} className="flex flex-col gap-2">
                <Thumbnail
                    showMember={true}
                    memberCount={image.memberCount}
                    memberLimit={image.memberLimit}
                    imgSrc={image.imgSrc}
                />
                <div className="flex flex-col gap-1 px-1">
                    <div className="flex gap-1">
                        <RatingStar
                            reviewScore={reviewScore}
                            reviewCount={reviewCount}
                        />
                    </div>
                    <div className="text-lg font-extrabold">{label}</div>
                    <div className="text-md truncate font-normal">
                        {content}
                    </div>
                </div>
            </Link>

            {/* 태그 영역: 각 태그는 개별 Link로 이동 */}
            <div className="flex gap-2 px-1 pb-4">{displayedTags}</div>
        </div>
    );
};

export default CardMeetingView;
