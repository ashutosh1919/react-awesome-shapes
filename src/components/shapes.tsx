import { Circle } from '../lib/shapes/circle';
import { Donut } from '../lib/shapes/donut';
import { CircleGrid } from '../lib/shapes/circlegrid';

export const Shapes = () => {
    return (
        <>
            <Circle
                size={['150px', '150px', '210px', '210px']}
                color='linear-gradient(225deg, #fed7aa, #fb923c)'
                top={['50px', '50px', '100px', '100px']}
                left={[`-50px`, `-50px`, `-70px`, `-50px`]} />
            <Circle size="35px" color="linear-gradient(45deg, #c7d2fe, #818cf8)" top={[`165px`, `80px`, `80px`, `80px`]} left={[`-5px`, `40px`, `40px`, `40px`]} />
            <Circle size="120px" color="linear-gradient(135deg, #f9a8d4, #ec4899)" top="300px" right={[`-80px`, `50px`, `50px`, `50px`]} />
            <Circle
                size="40px"
                color="linear-gradient(225deg, #bbf7d0, #4ade80)"
                top={["300px", "300px", "360px", "360px"]}
                right={[`30px`, `180px`, `180px`, `150px`]}
            />
            <Donut
                size="30px"
                color="#4ade80"
                width="10px"
                top="260px"
                left={[`-15px`, `-5px`, `-5px`, `20px`]}
            />
            <Donut
                size={`100px`}
                color="#c084fc"
                width={[`20px`, `20px`, `50px`, `50px`]}
                top={['300px', '300px', '400px', '400px']}
                left={[`-20px`, `-20px`, `-20px`, `-20px`]}
            />
            <CircleGrid
                color="#c7d2fe"
                size="175px"
                top={['40px', '50px', '150px', '100px']}
                right={[`-90px`, `-50px`, `-70px`, `-30px`]} />
        </>
    );
}