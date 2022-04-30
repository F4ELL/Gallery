import * as C from './styles'

type TProps = {
    url: string,
    name: string
}

export const PhotoItem = ({ url, name }: TProps) => {
    return(
        <C.Container>
            <img src={url} alt={name} />
            {name}
        </C.Container>
    )
}