import Image from 'next/image';
import React from 'react';
import CrowdPhoto from '@/assets/bizkimiz.png';
import Link from 'next/link';

const BizKimizPage = () => {
	return (
		<div className='h-full snap-start relative'>
			<Image
				alt='Crowd'
				src={CrowdPhoto}
				className='absolute bottom-0 object-cover h-2/5 pointer-events-none object-crowd z-20'
			/>

			<main className='h-4/6 relative flex flex-col  pt-24 md:pt-32 items-center'>
				{/* <h1 className='absolute font-black text-3xl top-0 left-0'>
					Mentee
					<br />
					Nedir?
				</h1> */}

				<div className='flex flex-col items-center gap-6 max-w-xs md:max-w-lg'>
					<h1 className='font-black text-4xl md:text-5xl'>Biz Kimiz?</h1>
					<div className='w-64 md:w-96 bg-customNavy h-2 md:h-4 '></div>
					<p className='text-center mt-12 md:mt-16'>
					Yıldız Teknik Üniversitesinde mezunların bilgi ve tecrübelerinin öğrencilerin kişisel kariyerlerinin gelişiminde kullanılması amacıyla; rektörlük, öğretim üyeleri, mezunlar ve öğrencilerin ortak çalışma içerisinde ortaya çıkan bir gönüllülük projesidir. Bu kapsamda; öğrenci ve mezun birlikteliği uzun vadede iş hayatınca Yıldız birlikteliği oluşturulması amaçlanır.

Diğer yandan ise; mezunların kendi aralarında oluşturdukları ağın genişletilmesine olanak sağlar. Yıl içerisinde gerçekleştirilen çeşitli organizasyonlar ile bu birliktelik oluşturulur ve pekiştirilir.{' '}
						<span className='font-bold underline'>
							<Link href={'#'}>daha fazla...</Link>
						</span>
					</p>
				</div>
			</main>
		</div>
	);
};

export default BizKimizPage;
