import ModalText from '@/components/common/ModalText';
import ModalWrapper from '@/components/common/ModalWrapper';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';

export default function EquipmentsType(): ReactElement {
  const { pathname } = useRouter();

  return (
    <ModalWrapper>
      <ModalText>신청 유형을 선택해 주세요.</ModalText>
      <div className='flex justify-center space-x-2'>
        <Link href={`${pathname}/new`} className='button-modal dark:border-white dark:border group'>
          <p className= 'dark:text-white dark:group-hover:text-black'>신규</p>
        </Link>
        <Link href={`${pathname}/extension`} className='button-modal dark:border-white dark:border group'>
          <p className= 'dark:text-white dark:group-hover:text-black'>연장</p>
        </Link>
      </div>
    </ModalWrapper>
  );
}
