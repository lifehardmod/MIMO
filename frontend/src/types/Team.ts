import { ProfileImageProps } from '@/components/atoms/ProfileImage/ProfileImage';

export interface SimpleTeamResponse {
    teamId: number;
    name: string;
    description: string;
    teamProfileUri: string;
    reviewScore: number;
    reviewCount: number;
    memberCount: number;
    maxCapacity: number;
    currentCapacity: number;
    tags: string[];
}
export interface TagsResponse {
    tags: string[];
}

export interface TeamInfoResponse {
    teamId: number;
    profileUri: string;
    name: string;
    accountNumber: string;
    description: string;
    recruitStatus: TeamRecruitStatus;
    privateStatus: TeamPrivateStatus;
    maxCapacity: number;
    currentCapacity: number;
    reviewScore: number;
    reviewCount: number;
    tags: string[];
}

export interface UpdateTeamRequest {
    teamId: number;
    profileUri: string;
    name: string;
    description: string;
    recruitStatus: TeamRecruitStatus;
    privateStatus: TeamPrivateStatus;
    area: string;
    category: string;
    maxCapacity: number;
}

export interface MyTeamProfileResponse {
    teamId: number;
    teamUserId: number;
    hasReview: boolean;
    isInvited: boolean;
    nickname: string;
    role: TeamUserRole;
    notificationStatus: TeamNotificationStatus;
    joinDate: string;
}

export interface TeamCreateRequest {
    name: string;
    description: string;
    area: string;
    category: string;
    nickname: string;
    notificationStatus: TeamNotificationStatus;
    teamRecruitStatus: TeamRecruitStatus;
    teamPrivateStatus: TeamPrivateStatus;
    maxCapacity: string;
    teamProfile?: File | null;
}

export interface TeamResponse {
    teamId: number;
    profileUri: string;
    name: string;
    description: string;
    recruitStatus: TeamRecruitStatus;
    privateStatus: TeamPrivateStatus;
    area: string;
    maxCapacity: number;
    currentCapacity: number;
}
export type TeamPrivateStatus = 'PRIVATE' | 'PUBLIC';
export type TeamNotificationStatus = 'ACTIVE' | 'INACTIVE';
export type TeamRecruitStatus = 'ACTIVE_PRIVATE' | 'ACTIVE_PUBLIC' | 'INACTIVE';
export type TeamUserRole = 'LEADER' | 'CO_LEADER' | 'MEMBER' | 'GUEST';
export type InviteStatus = 'ACCEPTED' | 'WAITING' | 'REJECTED';

export interface TeamUserDto {
    teamUserId: number;
    nickname: string;
    role: TeamUserRole;
    userId: number;
    profileUri: string;
    joinTime: string;
}

export interface TeamUserResponse {
    size: number;
    hasNext: boolean;
    role: TeamUserRole;
    lastTeamUserId: number;
    users: TeamUserDto[];
}

export interface TeamInvitesResponse {
    size: number;
    hasNext: boolean;
    role: TeamUserRole;
    lastTeamUserId: number;
    teamInvites: teamInvites[];
}

export interface teamInvites {
    teamInviteId: number;
    teamId: number;
    userId: number;
    status: InviteStatus;
    name: string;
    memo: string;
    profileUri: string;
}

export interface TeamInfosResponse {
    size: number;
    hasNext: boolean;
    lastTeamId: number;
    teams: SimpleTeamResponse[];
}

export interface TitleSearchResponse {
    numOfTeams: number;
    pageNumber: number;
    size: boolean;
    teams: SimpleTeamResponse[];
}
export interface TagSearchResponse {
    numberOfTeams: number;
    pageNumber: number;
    size: boolean;
    teams: SimpleTeamResponse[];
}

export interface TeamSimpleScheduleDto {
    teamScheduleId: number;
    date: string;
    title: string;
    price: number;
    profileUris: ProfileImageProps[];
}

export interface TeamSchedulesResponse {
    size: number;
    hasNext: boolean;
    lastTeamScheduleId: number;
    schedules: TeamSimpleScheduleDto[];
}

export interface TeamScheduleSpecificResponse {
    isTeamMember: boolean;
    isTeamScheduleMember: boolean;
    isMyTeamSchedule: boolean;
    teamScheduleId: number;
    status: ScheduleStatus;
    location: string;
    date: Date;
    price: number;
    nameOfLeader: string;
    profileUris: ProfileImageProps[];
    maxParticipants: number;
    currentParticipants: number;
    title: string;
    description: string;
    comments: TeamScheduleCommentDto[];
}

export interface TeamScheduleCommentDto {
    teamScheduleCommentId: number;
    isMyComment: boolean;
    profileUri: string;
    name: string;
    time: string; // LocalDateTime을 string으로 처리
    commentSortId: number; // Long을 number로 처리
    hasParent: boolean;
    content: string;
}

export enum ScheduleStatus {
    AD_HOC = 'AD_HOC', // 번개모임
    REGULAR = 'REGULAR', // 정기모임
    CLOSED = 'CLOSED', // 종료된 모임
}

export const ScheduleStatusName: Record<ScheduleStatus, string> = {
    [ScheduleStatus.AD_HOC]: '번개모임',
    [ScheduleStatus.REGULAR]: '정기모임',
    [ScheduleStatus.CLOSED]: '종료된 모임',
};
