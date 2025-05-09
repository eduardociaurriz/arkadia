import Contact from "./Contact";

interface ContentProps { }

const Content: React.FC<ContentProps> = () => {


    return (
        <div className="content flex items-center justify-center p-1 pl-4 ">
            <Contact />
        </div>
    );
};

export default Content;
