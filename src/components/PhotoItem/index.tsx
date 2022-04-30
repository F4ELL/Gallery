import { deletePhoto } from '../../services/photos'
import * as C from './styles'

type TProps = {
    url: string,
    name: string
    onDelete: (name: string) => void
}

export const PhotoItem = ({ url, name, onDelete }: TProps) => {
    return(
        <C.Container>
            <img src={url} alt={name} />
            {name}
            <button onClick={() => onDelete(name)}>Excluir</button>
        </C.Container>
    )
}