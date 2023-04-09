import React from 'react';
import { NextPageContext } from 'next';
import { getSession, signOut } from 'next-auth/react';

/*
import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import InfoModal from '@/components/InfoModal';
import useMovieList from '@/hooks/useMovieList';
import useFavorites from '@/hooks/useFavorites';
import useInfoModalStore from '@/hooks/useInfoModalStore'; */

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

const Home = () => {
  /*const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
  const {isOpen, closeModal} = useInfoModalStore(); */

  return ( 
    <>
      <h1 className="text-white">Netflix HOME</h1>
      <button onClick={() => signOut()} className="h-10 w-full bg-white">Logout!</button>
    </> 
  );
}

export default Home;