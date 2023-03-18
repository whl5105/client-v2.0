import defaultImage from '../../assets/defaultImage.png';
import * as t from '../../style/profileImage.style';

interface IProp {
  image: string;
  name: string;
  id?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
}

export default function ProfileImage(props: IProp) {
  return (
    <t.Container>
      <t.UserImg
        src={props.image ? props.image : defaultImage}
        alt={props.name}
        {...props}
      />
      {props.id && (
        <p>
          <strong>{props.name}</strong>[{props.id}]
        </p>
      )}
    </t.Container>
  );
}
