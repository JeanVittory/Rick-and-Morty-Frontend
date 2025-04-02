import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { singleCharacter } from '../../services/fetchingCharacters.service';
import { singleCharacterAdapater } from '../../adapters/singleCharacter.adapters';
import { Spinner } from '../../components/Spinner';
import { useDispatch } from 'react-redux';
import { updateSingleCharacter } from '../../redux/singleCharacterSlice/singleCharacterSlice.redux';
import { singleCharacterModel } from '../../models/singleCharacter.models';
import { CardSingleCharacter } from './components/CardSingleCharacter.pages.singleCharacterContainer.components';
import { ButtonGoBack } from './components/Button.pages.singleCharacteRContainer.components';
import { CommentSection } from './components/CommentSection.singleCharacter.page.components';

export const SingleCharacterContainer = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    const callToEndPoint = async () => {
      setLoading(true);
      const dataFromEndPoint = await singleCharacter(id as string);
      const formattedData: singleCharacterModel = singleCharacterAdapater(dataFromEndPoint);
      dispatch(updateSingleCharacter(formattedData));
      setLoading(false);
    };
    callToEndPoint();
  }, [id]);

  if (loading) return <Spinner />;

  return (
    <main className='container mx-auto'>
      <ButtonGoBack />
      <CardSingleCharacter />
      <CommentSection />
    </main>
  );
};
