import type { Dispatch, FormEvent, ReactElement, SetStateAction } from 'react';

import FormAgreement from '../common/FormAgreement';
import FormContainer from '../common/FormContainer';
import FormInput from '../common/FormInput';
import FormSelect from '../common/FormSelect';
import FormSubmitButton from '../common/FormSubmitButton';

const PLACES = [
  'B1F: 어셈블리',
  '1F: 오픈 스튜디오',
  '2/4/5F: 클러스터',
  '3F: 회의실',
  '폴베가 있는 마루관',
  '기타',
];
const PURPOSES = [
  '견학: "너희 교육장이 정말 궁금하구나!"',
  '학습: "너와 함께 공부하고 싶어!"',
  '토크: "이야기할 것이 많으니 교육장 안에서 이야기하자!"',
  '기타',
];
const RELATIONS = [
  '42서울에서 인연을 맺었던 동료 "피시너/카뎃"',
  '나를 보고 싶어 개포까지 달려 올 나의 "친구"',
  '나의 소중한 "가족"',
  '멘토님 또는 그에 상응하는 "은사"',
  '기타',
];

interface VisitorsFormProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export default function VisitorsForm({ setShowModal }: VisitorsFormProps): ReactElement {
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setShowModal(true);
  };
  return (
    <FormContainer>
      <div className='mx-auto max-w-2xl pb-5 text-gray-900'>
        <h2 className='border-b border-[#6A70FF] pb-3 text-3xl font-bold tracking-tight text-[#6A70FF]'>
          외부인 초대 사전 승인 신청
        </h2>
        <p className='pt-5'>안녕하세요. 폴라베어입니다.</p>
        <p>우리 42서울은 외부인 방문이 가능한 곳입니다만 무분별한 출입은 불허하고 있습니다.</p>
        <p className='pt-4'>우리 교육장에는 값비싼 기자재 및 시설들이 즐비하며,</p>
        <p>외부인이 이를 파손 시 우리 42서울 카뎃분들이 상당한 불편함을 가질 수 있기 때문입니다.</p>
        <p className='pt-4'>그렇기에 스태프의 사전 승인 없이는 외부인 출입을 불허하고 있으며,</p>
        <p>본 신청을 통해 외부인 출입을 허용해 드리고자 합니다.</p>
        <p className='pt-4'>
          조금은 불편하더라도 확실한 보안을 위한 절차이오니 이 점 참고해 주시기 바랍니다.
        </p>
      </div>
      <form onSubmit={handleFormSubmit} action='#' method='POST' className='mx-auto my-10 max-w-xl'>
        <div className='grid grid-cols-1 gap-y-6 pb-6'>
          <FormInput
            title='방문자 이름'
            type='text'
            onChange={() => {}}
            placeholder='어떤 분을 데려 오시나요? 이름을 알려 주세요.'
          />
          <FormSelect
            title='방문자와의 관계'
            contents={RELATIONS}
            placeholder='방문자와 어떤 사이신가요?'
          />
          <FormSelect
            title='방문 목적'
            contents={PURPOSES}
            placeholder='방문 목적을 선택해 주세요.'
          />
          <FormSelect
            title='방문 장소'
            contents={PLACES}
            placeholder='방문 목적을 선택해 주세요.'
          />
          <FormInput title='방문 예정 시각' type='time' onChange={() => {}} />
          <FormAgreement>
            <p>외부인 방문 시 반드시 동행할 것을 약속하며</p>
            <p>외부인에 의해 시설이 훼손된 경우 공동 책임이 따름을 확인했습니다.</p>
          </FormAgreement>
        </div>
        <FormSubmitButton />
      </form>
    </FormContainer>
  );
}
