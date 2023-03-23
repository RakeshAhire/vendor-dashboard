
import { Flex, Box } from '@chakra-ui/react';
import { BarChart } from '../components/BarChart';
import { CalendarUi } from '../components/CalendarUi';
import { DemoPie } from '../components/PieChart'
import TodoList from '../components/TodoList';

const Dashboard = () => {
  return (
    <div>
      <Box>

      </Box>
      <Flex justifyContent="space-between" mt={5}>
        <Box w={"68%"}>
          <BarChart />
        </Box>
        <Box w={"28%"}>
          <DemoPie />
        </Box>
      </Flex>
      <Flex justifyContent="space-between" mt={10}>
        <Box w={"50%"}>
          <TodoList />
        </Box>
        <Box >
          <CalendarUi />
        </Box>
      </Flex>

    </div>
  )
}

export default Dashboard;
