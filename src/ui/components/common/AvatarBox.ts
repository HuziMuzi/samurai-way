import styled from "styled-components";

type TSizes = "smallest" | "small" | "large" | "middle";

type TSAvatarProps = {
    size?: TSizes;
    img?: string;
    isEditable?: boolean;
};

const imgSizes = (size: TSizes) => {
    const sizePx = size === "small" ? 40 : size === "large" ? 180 : size === "smallest" ? 30 : 60;
    return {
        minWidth: sizePx,
        maxWidth: sizePx,
        maxHeight: sizePx,
        minHeight: sizePx,
    };
};

export const SAvatar = styled.div<TSAvatarProps>((props) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    overflow: "hidden",
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    backgroundImage: `url(${props.img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    img: {
        objectFit: "cover",
        objectPosition: "center",
        minWidth: "100%",
        minHeight: "100%",
    },
    ...imgSizes(props.size || "middle"),
    ...props.size === "large" && {
        border: `10px solid ${props.theme.colors.white}`,
    }
}));
