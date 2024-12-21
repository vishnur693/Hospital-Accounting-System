import React from 'react';
import { BellOutlined, UserOutlined } from '@ant-design/icons'; 
import { Avatar, Badge, Dropdown, Menu, Card, Input } from 'antd'; 
import { motion } from 'framer-motion'; 
import Navbar from './Navbar'; 
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'; 
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import { BarChart, Bar,  AreaChart, Area } from 'recharts'; 

const Dashboard = () => {
  // Create the menu for notifications
  const notificationMenu = (
    <Menu>
      <Menu.Item>Notification 1</Menu.Item>
      <Menu.Item>Notification 2</Menu.Item>
      <Menu.Item>Notification 3</Menu.Item>
    </Menu>
  );
  const columns = [
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: 'Income',
      dataIndex: 'income',
      key: 'income',
    },
    {
      title: 'Expense',
      dataIndex: 'expense',
      key: 'expense',
    },
    {
      title: 'Profit',
      dataIndex: 'profit',
      key: 'profit',
    },
  ];
  // Create the menu for profile actions
  const profileMenu = (
    <Menu>
      <Menu.Item>Profile</Menu.Item>
      <Menu.Item>Settings</Menu.Item>
      <Menu.Item><Link to="/">Log out</Link></Menu.Item>
    </Menu>
  );

  // Sample department data with unique background colors
  const departments = [
    { name: 'Cardiology', income: 50000, expense: 20000, bgColor: '#ff8c00', icon: '❤️' },
    { name: 'Neurology', income: 60000, expense: 25000, bgColor: '#3498db', icon: '🧠' },
    { name: 'Orthopedics', income: 55000, expense: 22000, bgColor: '#2ecc71', icon: '💪' },
    { name: 'Pediatrics', income: 45000, expense: 18000, bgColor: '#e74c3c', icon: '👶' },
  ];

  // Example user and department count
  const userCount = 150;
  const departmentCount = departments.length;

  // Prepare data for the pie chart
  const pieData = [
    { name: 'Cardiology', value: 50000 },
    { name: 'Neurology', value: 60000 },
    { name: 'Orthopedics', value: 55000 },
    { name: 'Pediatrics', value: 45000 },
  ];

  // Color palette for pie chart
  const COLORS = ['#ff8c00', '#3498db', '#2ecc71', '#e74c3c'];

  // Sample recent activities
  const recentActivities = [
    'User registration updated.',
    'New department added.',
    'Server maintenance completed.',
    'Financial report generated.',
    'New notification received.',
    'Monthly income report generated.',
    'Security patch applied to the server.',
    'Server maintenance completed.',
    'Financial report generated.',
    'New notification received.',
    'Monthly income report generated.',
    'Security patch applied to the server.',
    'Server maintenance completed.',
    'Financial report generated.',
    'New notification received.',
    'Monthly income report generated.',
    'Security patch applied to the server.',
  ];

  const tableData = [
    { key: '1', department: 'Cardiology', income: 50000, expense: 20000, profit: 30000 },
    { key: '2', department: 'Neurology', income: 60000, expense: 25000, profit: 35000 },
    { key: '3', department: 'Orthopedics', income: 55000, expense: 22000, profit: 33000 },
    { key: '4', department: 'Pediatrics', income: 45000, expense: 18000, profit: 27000 },
  ];

  return (
    <div>
      <Navbar />

      {/* Main content area */}
      <div className="content">
        {/* Top section: Search Box, Notification and Profile Icons */}
        <div className="header-top">
          <div className="search-box">
            <Input.Search 
              placeholder="Search..."
              style={{
                width: 250, 
                borderRadius: '20px',
                backgroundColor: '#f0f0f0',
                border: '1px solid #ccc',
              }} 
              onSearch={value => console.log(value)} 
            />
          </div>
          <div className="header-icons">
            <Dropdown overlay={notificationMenu} trigger={['click']}>
              <Badge count={5} dot>
                <BellOutlined className="header-icon" />
              </Badge>
            </Dropdown>
            <Dropdown overlay={profileMenu} trigger={['click']}>
              <Avatar 
                className="header-avatar" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzkVpYnCyZ57FwNEHg8oTi3BLfMQi83XBsDA&s" 
                style={{ backgroundColor: '', color: '#fff' }} 
              />
            </Dropdown>
          </div>
        </div>

        {/* Department Cards */}
        <div className="department-cards">
          {departments.map((department, index) => (
            <motion.div 
              className="card-container" 
              key={index}
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card 
                title={<div className="card-title">{department.icon} {department.name}</div>}
                bordered={false}
                className="department-card"
                hoverable
                style={{
                  backgroundColor:  '#CCCCFF',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                }}
                hoverable
              >
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Income: ${department.income}
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Expense: ${department.expense}
                </motion.p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pie Chart and Recent Activity Box Section */}
        <div className="pie-and-activity">
          <div className="pie-chart-container">
            <Card title="Department Income Distribution" bordered={false} className="pie-chart-card">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    fill="#8884d8"
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </div>

          <div className="recent-activity-container">
            <Card title="Recent Activity" bordered={false} className="recent-activity-card">
              <div className="activity-list-wrapper">
                <ul className="activity-list">
                  {recentActivities.map((activity, index) => (
                    <li key={index} className="activity-item">{activity}</li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </div>

        {/* Additional Stats Cards */}
        <div className="stats-cards">
          <motion.div 
            className="card-container" 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Card 
              title="Users Count"
              bordered={false}
              className="users-card"
              hoverable
              headStyle={{ backgroundColor: '#91bdab', color: '#fff' }} 
            >
              <p className="users-text" style={{ fontWeight: 'bold' }}>Total Users: {userCount}</p>
            </Card>
          </motion.div>

          <motion.div 
            className="card-container" 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Card 
              title="Department Count"
              bordered={false}
              className="department-count-card"
              hoverable
              headStyle={{ backgroundColor: '#91bdab', color: '#fff' }} 
            >
              <p className="department-text" style={{ fontWeight: 'bold' }}>Total Departments: {departmentCount}</p>
            </Card>
          </motion.div>
        </div>

        {/* Graphs Section */}
        <div className="modern-graphs">
          <div className="graph-container">
            <Card title="Income and Expense Trend by Department" bordered={false} className="graph-card">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={departments}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="income" fill="#3498db" />
                  <Bar dataKey="expense" fill="#e74c3c" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>
          
          <div className="graph-container">
            <Card title="Department Profit Growth" bordered={false} className="graph-card">
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={departments}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="income" stroke="#3498db" fill="#3498db" />
                  <Area type="monotone" dataKey="expense" stroke="#e67e22" fill="#e67e22" />
                </AreaChart>
              </ResponsiveContainer>
            </Card>
          </div>
        </div>


        {/* Table Section */}
        <div className="table-container">
          <Card title="Department Financial Overview" bordered={false}>
            <Table 
              dataSource={tableData} 
              columns={columns} 
              pagination={false} 
              rowKey="key" 
              scroll={{ x: 800 }}  // Makes the table horizontally scrollable
            />
          </Card>
        </div>
      </div>

      {/* Internal CSS */}
     <style jsx>{`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f7fb;
  }

  .content {
    padding: 20px;
  }

  .header-top {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    background-color: #f0f0f0;
    padding: 10px 20px;
    border-radius: 10px;
  }

  .search-box {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6px;
  }

  .header-icons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
  }

  .header-icon {
    font-size: 24px;
    color: #333;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  .header-icon:hover {
    color: #e74c3c;
  }

  .header-avatar {
    cursor: pointer;
  }

  .department-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 50px;
  }

  .department-card {
    border-radius: 12px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .department-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .card-title {
    font-size: 1.3rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .card-title span {
    font-size: 1.6rem;
  }

  .pie-and-activity {
    display: flex;
    gap: 20px;
    margin-top: 50px;
    flex-wrap: wrap;
    justify-content: center; 
  }

  .pie-chart-container,
  .recent-activity-container {
    flex: 1;
    max-width: 600px;
  }

  .activity-list-wrapper {
    width: 100%;
    padding: 10px;
    max-height:340px;
    overflow-y: auto;
    margin-top: 60px;
  }

  .activity-list {
    list-style-type: none;
    padding: 0;
  }

  .activity-item {
    font-size: 1rem;
    font-weight: 400;
    color: #555;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }

  .stats-cards {
    display: flex;
    gap: 20px;
    margin-top: 50px;
    justify-content: space-between;
  }

  .card-container {
    flex: 1;
  }

  .graph-container {
    flex: 1;
    max-width: 600px;
  }

  .graph-card {
    background-color: #ecf0f1;
  }

  .table-container {
    margin-top: 50px;
  }

  .table-container .ant-card {
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .table-container .ant-table {
    border-radius: 10px;
  }

  .modern-graphs {
    display: flex;
    gap: 20px;
    margin-top: 50px;
    justify-content: center;
  }

  /* Responsive Design for smaller screens */
  @media (max-width: 1200px) {
    .department-cards {
      grid-template-columns: repeat(3, 1fr);
    }

    .pie-and-activity {
      flex-direction: column;
      gap: 30px;
    }

    .pie-chart-container,
    .recent-activity-container {
      max-width: 100%;
    }

    .stats-cards {
      flex-direction: column;
      gap: 30px;
    }

    .graph-container {
      max-width: 100%;
    }

    .modern-graphs {
      flex-direction: column;
      gap: 30px;
    }
  }

  @media (max-width: 768px) {
    .department-cards {
      grid-template-columns: repeat(2, 1fr);
    }

    .pie-and-activity {
      flex-direction: column;
      gap: 30px;
    }

    .stats-cards {
      flex-direction: column;
      gap: 20px;
    }

    .graph-container {
      max-width: 100%;
    }

    .modern-graphs {
      flex-direction: column;
      gap: 30px;
    }
  }

  @media (max-width: 480px) {
    .department-cards {
      grid-template-columns: 1fr;
    }

    .header-top {
      flex-direction: column;
      gap: 10px;
    }

    .header-icons {
      justify-content: center;
    }

    .pie-and-activity {
      flex-direction: column;
    }

    .stats-cards {
      flex-direction: column;
      gap: 20px;
    }

    .table-container .ant-table {
      font-size: 12px;
    }

    .table-container .ant-table .ant-table-tbody > tr > td {
      padding: 8px;
    }

    .modern-graphs {
      flex-direction: column;
      gap: 30px;
    }
  }
`}</style>

    </div>
  );
};

export default Dashboard;
