const Category = () => {
    return (
        <div className="text-center mt-10 mb-20">
            <div>
            <p className="text-3xl text-purple-400">Choose Your Favorite Language & FrameWorks </p>
            <p className="text-2xl font-light mt-5">Explore thousands of opportunities with all infos you need. Its your Future</p>
            </div>
           <div>
           <select className="select select-primary w-full max-w-xs mt-4">
                <option selected>What is the Best Language?</option>
                <option>C++</option>
                <option>Java</option>
                <option>PyThon</option>
                <option>JavaScript</option>
            </select>
            <select className="select select-bordered w-full max-w-xs mt-5">
                <option selected>What Is The Best FrameWork?</option>
                <option>React</option>
                <option>Django</option>
                <option>Flask</option>
                <option>Laravel</option>
                <option>Ruby</option>
                <option>Vue.Js</option>
            </select>
           </div>
        </div>
    );
};

export default Category;