CREATE TABLE seats(
    id VARCHAR(4) PRIMARY KEY,
    isAvailable BOOLEAN NOT NULL,
    isVIP BOOLEAN NOT NULL,
    isVVIP BOOLEAN NOT NULL,
    owner_id VARCHAR(50),
    isOrder BOOLEAN NOT NULL
);

TRUNCATE TABLE seats;
INSERT INTO seats(id, isAvailable, isVIP, isVVIP, owner_id, isOrder) VALUES
('A1', false, true, false, NULL, false),
('A2', false, true, false, NULL, false),
('A3', false, true, false, NULL, false),
('A4', false, true, false, NULL, false),
('A5', true, true, false, NULL, false),
('A6', false, true, false, NULL, false),
('A7', false, true, false, NULL, false),
('A8', false, true, false, NULL, false),
('A9', false, true, false, NULL, false),
('A10', false, true, false, NULL, false),
('A11', false, true, false, NULL, false),
('A12', false, true, false, NULL, false),
('A13', false, true, false, NULL, false),
('A14', true, true, false, NULL, false),
('A15', true, true, false, NULL, false),
('A16', true, true, false, NULL, false),
('A17', true, true, false, NULL, false),
('A18', true, true, false, NULL, false),
('A19', false, true, false, NULL, false),
('A20', false, true, false, NULL, false),
('A21', true, true, false, NULL, false),
('A22', false, true, false, NULL, false),
('A23', false, true, false, NULL, false),
('A24', false, true, false, NULL, false),
('A25', false, true, false, NULL, false),
('A26', false, true, false, NULL, false),
('A27', false, true, false, NULL, false),
('A28', false, true, false, NULL, false),
('A29', true, true, false, NULL, false),
('A30', true, true, false, NULL, false),
('A31', true, true, false, NULL, false),
('A32', true, true, false, NULL, false),
('A33', true, true, false, NULL, false),
('A34', true, true, false, NULL, false),
('A35', true, true, false, NULL, false),
('A36', true, true, false, NULL, false),
('A37', true, true, false, NULL, false),
('A38', true, true, false, NULL, false),
('A39', true, true, false, NULL, false),
('A40', true, true, false, NULL, false),
('A41', true, true, false, NULL, false),
('A42', true, true, false, NULL, false),
('A43', true, true, false, NULL, false),
('A44', true, true, false, NULL, false),
('A45', true, true, false, NULL, false),
('A46', true, true, false, NULL, false),
('A47', true, true, false, NULL, false),
('A48', true, true, false, NULL, false),
('A49', true, true, false, NULL, false),
('A50', true, true, false, NULL, false),
('A51', true, true, false, NULL, false),
('A52', true, true, false, NULL, false),
('A53', true, true, false, NULL, false),
('A54', true, true, false, NULL, false),
('A55', true, true, false, NULL, false),
('A56', true, true, false, NULL, false),
('A57', true, true, false, NULL, false),
('A58', true, true, false, NULL, false),
('A59', true, true, false, NULL, false),
('A60', true, true, false, NULL, false),
('A61', true, true, false, NULL, false),
('A62', true, true, false, NULL, false),
('A63', true, true, false, NULL, false),
('A64', true, true, false, NULL, false),
('A65', true, true, false, NULL, false),
('A66', true, true, false, NULL, false),
('A67', true, true, false, NULL, false),
('A68', true, true, false, NULL, false),
('A69', true, true, false, NULL, false),
('A70', true, true, false, NULL, false),
('A71', true, true, false, NULL, false),
('A72', true, true, false, NULL, false),
('A73', true, true, false, NULL, false),
('A74', true, true, false, NULL, false),
('A75', true, true, false, NULL, false),
('A76', true, true, false, NULL, false),
('A77', true, true, false, NULL, false),
('A78', true, true, false, NULL, false),
('A79', true, true, false, NULL, false),
('A80', true, true, false, NULL, false),
('A81', true, true, false, NULL, false),
('A82', true, true, false, NULL, false),
('A83', true, true, false, NULL, false),
('A84', true, true, false, NULL, false),
('A85', true, true, false, NULL, false),
('A86', true, true, false, NULL, false),
('A87', true, true, false, NULL, false),
('A88', true, true, false, NULL, false),
('A89', true, true, false, NULL, false),
('A90', true, true, false, NULL, false),
('A91', true, true, false, NULL, false),
('A92', true, true, false, NULL, false),
('A93', true, true, false, NULL, false),
('A94', true, true, false, NULL, false),
('A95', true, true, false, NULL, false),
('A96', true, true, false, NULL, false),
('A97', true, true, false, NULL, false),
('A98', true, true, false, NULL, false),
('A99', true, true, false, NULL, false),
('A100', true, true, false, NULL, false),
('A101', true, true, false, NULL, false),
('A102', true, true, false, NULL, false),
('A103', true, true, false, NULL, false),
('A104', true, true, false, NULL, false),
('A105', true, true, false, NULL, false),
('A106', true, true, false, NULL, false),
('A107', true, true, false, NULL, false),
('A108', true, true, false, NULL, false),
('A109', true, true, false, NULL, false),
('A110', true, true, false, NULL, false),
('A111', true, true, false, NULL, false),
('A112', true, true, false, NULL, false),

('C1', true, false, false, NULL, false),
('C2', true, false, false, NULL, false),
('C3', true, false, false, NULL, false),
('C4', true, false, false, NULL, false),
('C5', true, false, false, NULL, false),
('C6', true, false, false, NULL, false),
('C7', true, false, false, NULL, false),
('C8', true, false, false, NULL, false),
('C9', true, false, false, NULL, false),
('C10', true, false, false, NULL, false),
('C11', true, false, false, NULL, false),
('C12', true, false, false, NULL, false),
('C13', true, false, false, NULL, false),
('C14', true, false, false, NULL, false),
('C15', true, false, false, NULL, false),
('C16', true, false, false, NULL, false),
('C17', true, false, false, NULL, false),
('C18', true, false, false, NULL, false),
('C19', true, false, false, NULL, false),
('C20', true, false, false, NULL, false),
('C21', true, false, false, NULL, false),
('C22', true, false, false, NULL, false),
('C23', true, false, false, NULL, false),
('C24', true, false, false, NULL, false),
('C25', true, false, false, NULL, false),
('C26', true, false, false, NULL, false),
('C27', true, false, false, NULL, false),
('C28', true, false, false, NULL, false),
('C29', true, false, false, NULL, false),
('C30', true, false, false, NULL, false),
('C31', true, false, false, NULL, false),
('C32', true, false, false, NULL, false),
('C33', true, false, false, NULL, false),
('C34', true, false, false, NULL, false),
('C35', true, false, false, NULL, false),
('C36', true, false, false, NULL, false),
('C37', true, false, false, NULL, false),
('C38', true, false, false, NULL, false),
('C39', true, false, false, NULL, false),
('C40', true, false, false, NULL, false),
('C41', true, false, false, NULL, false),
('C42', true, false, false, NULL, false),
('C43', true, false, false, NULL, false),
('C44', true, false, false, NULL, false),
('C45', true, false, false, NULL, false),
('C46', true, false, false, NULL, false),
('C47', true, false, false, NULL, false),
('C48', true, false, false, NULL, false),
('C49', true, false, false, NULL, false),
('C50', true, false, false, NULL, false),
('C51', true, false, false, NULL, false),
('C52', true, false, false, NULL, false),
('C53', true, false, false, NULL, false),
('C54', true, false, false, NULL, false),
('C55', true, false, false, NULL, false),
('C56', true, false, false, NULL, false),
('C57', true, false, false, NULL, false),
('C58', true, false, false, NULL, false),
('C59', true, false, false, NULL, false),
('C60', true, false, false, NULL, false),
('C61', true, false, false, NULL, false),
('C62', true, false, false, NULL, false),
('C63', true, false, false, NULL, false),
('C64', true, false, false, NULL, false),
('C65', true, false, false, NULL, false),
('C66', true, false, false, NULL, false),
('C67', true, false, false, NULL, false),
('C68', true, false, false, NULL, false),
('C69', true, false, false, NULL, false),
('C70', true, false, false, NULL, false),
('C71', true, false, false, NULL, false),
('C72', true, false, false, NULL, false),
('C73', true, false, false, NULL, false),
('C74', true, false, false, NULL, false),
('C75', true, false, false, NULL, false),
('C76', true, false, false, NULL, false),
('C77', true, false, false, NULL, false),
('C78', true, false, false, NULL, false),
('C79', true, false, false, NULL, false),
('C80', true, false, false, NULL, false),
('C81', true, false, false, NULL, false),
('C82', true, false, false, NULL, false),
('C83', true, false, false, NULL, false),
('C84', true, false, false, NULL, false),
('C85', true, false, false, NULL, false),
('C86', true, false, false, NULL, false),
('C87', true, false, false, NULL, false),
('C88', true, false, false, NULL, false),
('C89', true, false, false, NULL, false),
('C90', true, false, false, NULL, false),
('C91', true, false, false, NULL, false),
('C92', true, false, false, NULL, false),
('C93', true, false, false, NULL, false),
('C94', true, false, false, NULL, false),
('C95', true, false, false, NULL, false),
('C96', true, false, false, NULL, false),
('C97', true, false, false, NULL, false),
('C98', true, false, false, NULL, false),
('C99', true, false, false, NULL, false),
('C100', true, false, false, NULL, false),
('C101', true, false, false, NULL, false),
('C102', true, false, false, NULL, false),
('C103', true, false, false, NULL, false),
('C104', true, false, false, NULL, false),
('E1', true, false, false, NULL, false),
('E2', true, false, false, NULL, false),
('E3', true, false, false, NULL, false),
('E4', true, false, false, NULL, false),
('E5', true, false, false, NULL, false),
('E6', true, false, false, NULL, false),
('E7', true, false, false, NULL, false),
('E8', true, false, false, NULL, false),
('E9', true, false, false, NULL, false),
('E10', true, false, false, NULL, false),
('E11', true, false, false, NULL, false),
('E12', true, false, false, NULL, false),
('E13', true, false, false, NULL, false),
('E14', true, false, false, NULL, false),
('E15', true, false, false, NULL, false),
('E16', true, false, false, NULL, false),
('E17', true, false, false, NULL, false),
('E18', true, false, false, NULL, false),
('E19', true, false, false, NULL, false),
('E20', true, false, false, NULL, false),
('E21', true, false, false, NULL, false),
('E22', true, false, false, NULL, false),
('E23', true, false, false, NULL, false),
('E24', true, false, false, NULL, false),
('E25', true, false, false, NULL, false),
('E26', true, false, false, NULL, false),
('E27', true, false, false, NULL, false),
('E28', true, false, false, NULL, false),
('E29', true, false, false, NULL, false),
('E30', true, false, false, NULL, false),
('E31', true, false, false, NULL, false),
('E32', true, false, false, NULL, false),
('E33', true, false, false, NULL, false),
('E34', true, false, false, NULL, false),
('E35', true, false, false, NULL, false),
('E36', true, false, false, NULL, false),
('E37', true, false, false, NULL, false),
('E38', true, false, false, NULL, false),
('E39', true, false, false, NULL, false),
('E40', true, false, false, NULL, false),
('E41', true, false, false, NULL, false),
('E42', true, false, false, NULL, false),
('E43', true, false, false, NULL, false),
('E44', true, false, false, NULL, false),
('E45', true, false, false, NULL, false),
('E46', true, false, false, NULL, false),
('E47', true, false, false, NULL, false),
('E48', true, false, false, NULL, false),
('E49', true, false, false, NULL, false),
('E50', true, false, false, NULL, false),
('E51', true, false, false, NULL, false),
('E52', true, false, false, NULL, false),
('E53', true, false, false, NULL, false),
('E54', true, false, false, NULL, false),
('E55', true, false, false, NULL, false),
('E56', true, false, false, NULL, false),
('E57', true, false, false, NULL, false),
('E58', true, false, false, NULL, false),
('E59', true, false, false, NULL, false),
('E60', true, false, false, NULL, false),
('E61', true, false, false, NULL, false),
('E62', true, false, false, NULL, false),
('E63', true, false, false, NULL, false),
('E64', true, false, false, NULL, false),
('E65', true, false, false, NULL, false),
('E66', true, false, false, NULL, false),
('E67', true, false, false, NULL, false),
('E68', true, false, false, NULL, false),
('E69', true, false, false, NULL, false),
('E70', true, false, false, NULL, false),
('E71', true, false, false, NULL, false),
('E72', true, false, false, NULL, false),
('E73', true, false, false, NULL, false),
('E74', true, false, false, NULL, false),
('E75', true, false, false, NULL, false),
('E76', true, false, false, NULL, false),
('E77', true, false, false, NULL, false),
('E78', true, false, false, NULL, false),
('E79', true, false, false, NULL, false),
('E80', true, false, false, NULL, false),
('E81', true, false, false, NULL, false),
('E82', true, false, false, NULL, false),
('E83', true, false, false, NULL, false),
('E84', true, false, false, NULL, false),
('E85', true, false, false, NULL, false),
('E86', true, false, false, NULL, false),
('E87', true, false, false, NULL, false),
('E88', true, false, false, NULL, false),
('E89', true, false, false, NULL, false),
('E90', true, false, false, NULL, false),
('E91', true, false, false, NULL, false),
('E92', true, false, false, NULL, false),
('E93', true, false, false, NULL, false),
('E94', true, false, false, NULL, false),
('E95', true, false, false, NULL, false),
('E96', true, false, false, NULL, false),
('E97', true, false, false, NULL, false),
('E98', true, false, false, NULL, false),
('E99', true, false, false, NULL, false),
('E100', true, false, false, NULL, false),
('E101', true, false, false, NULL, false),
('E102', true, false, false, NULL, false),
('E103', true, false, false, NULL, false),
('E104', true, false, false, NULL, false),

('V1', false, false, true, NULL, false),
('V2', false, false, true, NULL, false),
('V3', false, false, true, NULL, false),
('V4', false, false, true, NULL, false),
('V5', false, false, true, NULL, false),
('V6', false, false, true, NULL, false),
('V7', false, false, true, NULL, false),
('V8', false, false, true, NULL, false),
('V9', false, false, true, NULL, false),
('V10', false, false, true, NULL, false),
('V11', false, false, true, NULL, false),
('V12', false, false, true, NULL, false),
('V13', false, false, true, NULL, false),
('V14', false, false, true, NULL, false),
('V15', false, false, true, NULL, false),
('V16', false, false, true, NULL, false),
('V17', false, false, true, NULL, false),
('V18', false, false, true, NULL, false),
('V19', false, false, true, NULL, false),
('V20', false, false, true, NULL, false),
('V21', false, false, true, NULL, false),
('V22', false, false, true, NULL, false),
('V23', false, false, true, NULL, false),
('V24', false, false, true, NULL, false),
('V25', false, false, true, NULL, false),
('V26', false, false, true, NULL, false),
('V27', false, false, true, NULL, false),
('V28', false, false, true, NULL, false),
('V29', false, false, true, NULL, false),
('V30', false, false, true, NULL, false),
('V31', false, false, true, NULL, false),
('V32', false, false, true, NULL, false),
('V33', false, false, true, NULL, false),
('V34', false, false, true, NULL, false),
('V35', false, false, true, NULL, false),
('V36', false, false, true, NULL, false),
('V37', false, false, true, NULL, false),
('V38', false, false, true, NULL, false),
('V39', false, false, true, NULL, false),
('V40', false, false, true, NULL, false),
('V41', false, false, true, NULL, false),
('V42', false, false, true, NULL, false),
('V43', false, false, true, NULL, false),
('V44', false, false, true, NULL, false),
('V45', false, false, true, NULL, false),
('V46', false, false, true, NULL, false),
('V47', false, false, true, NULL, false),
('V48', false, false, true, NULL, false),
('V49', false, false, true, NULL, false),
('V50', false, false, true, NULL, false),
('V51', false, false, true, NULL, false),
('V52', false, false, true, NULL, false),
('V53', false, false, true, NULL, false),
('V54', false, false, true, NULL, false),

('B1', true, false, false, NULL, false),
('B2', true, false, false, NULL, false),
('B3', true, false, false, NULL, false),
('B4', true, false, false, NULL, false),
('B5', true, false, false, NULL, false),
('B6', true, false, false, NULL, false),
('B7', true, false, false, NULL, false),
('B8', true, false, false, NULL, false),
('B9', true, false, false, NULL, false),
('B10', true, false, false, NULL, false),
('B11', false, false, true, NULL, false),
('B12', false, false, true, NULL, false),
('B13', false, false, true, NULL, false),
('B14', false, false, true, NULL, false),
('B15', false, false, true, NULL, false),
('B16', false, false, true, NULL, false),
('B17', false, false, true, NULL, false),
('B18', false, false, true, NULL, false),
('B19', false, false, true, NULL, false),
('B20', false, false, true, NULL, false),
('B21', true, false, false, NULL, false),
('B22', true, false, false, NULL, false),
('B23', true, false, false, NULL, false),
('B24', true, false, false, NULL, false),
('B25', true, false, false, NULL, false),
('B26', true, false, false, NULL, false),
('B27', true, false, false, NULL, false),
('B28', true, false, false, NULL, false),
('B29', true, false, false, NULL, false),
('B30', true, false, false, NULL, false),
('B31', false, false, true, NULL, false),
('B32', false, false, true, NULL, false),
('B33', false, false, true, NULL, false),
('B34', false, false, true, NULL, false),
('B35', false, false, true, NULL, false),
('B36', false, false, true, NULL, false),
('B37', false, false, true, NULL, false),
('B38', false, false, true, NULL, false),
('B39', false, false, true, NULL, false),
('B40', false, false, true, NULL, false),
('B41', true, false, false, NULL, false),
('B42', true, false, false, NULL, false),
('B43', true, false, false, NULL, false),
('B44', true, false, false, NULL, false),
('B45', true, false, false, NULL, false),
('B46', true, false, false, NULL, false),
('B47', true, false, false, NULL, false),
('B48', true, false, false, NULL, false),
('B49', true, false, false, NULL, false),
('B50', true, false, false, NULL, false),
('B51', false, false, false, NULL, false),
('B52', false, false, false, NULL, false),
('B53', false, false, false, NULL, false),
('B54', false, false, false, NULL, false),
('B55', false, false, false, NULL, false),
('B56', false, false, false, NULL, false),
('B57', false, false, false, NULL, false),
('B58', false, false, false, NULL, false),
('B59', false, false, false, NULL, false),
('B60', false, false, false, NULL, false),
('B61', true, false, false, NULL, false),
('B62', true, false, false, NULL, false),
('B63', true, false, false, NULL, false),
('B64', true, false, false, NULL, false),
('B65', true, false, false, NULL, false),
('B66', true, false, false, NULL, false),
('B67', true, false, false, NULL, false),
('B68', true, false, false, NULL, false),
('B69', true, false, false, NULL, false),
('B70', true, false, false, NULL, false),
('B71', false, false, false, NULL, false),
('B72', false, false, false, NULL, false),
('B73', true, false, false, NULL, false),
('B74', true, false, false, NULL, false),
('B75', true, false, false, NULL, false),
('B76', false, false, false, NULL, false),
('B77', false, false, false, NULL, false),
('B78', false, false, false, NULL, false),
('B79', false, false, false, NULL, false),
('B80', false, false, false, NULL, false),
('B81', true, false, false, NULL, false),
('B82', true, false, false, NULL, false),
('B83', true, false, false, NULL, false),
('B84', true, false, false, NULL, false),
('B85', true, false, false, NULL, false),
('B86', true, false, false, NULL, false),
('B87', true, false, false, NULL, false),
('B88', true, false, false, NULL, false),
('B89', true, false, false, NULL, false),
('B90', true, false, false, NULL, false),
('B91', true, false, false, NULL, false),
('B92', true, false, false, NULL, false),
('B93', true, false, false, NULL, false),
('B94', true, false, false, NULL, false),
('B95', true, false, false, NULL, false),
('B96', true, false, false, NULL, false),
('B97', true, false, false, NULL, false),
('B98', true, false, false, NULL, false),
('B99', true, false, false, NULL, false),
('B100', true, false, false, NULL, false),

('D1', false, false, true, NULL, false),
('D2', false, false, true, NULL, false),
('D3', false, false, true, NULL, false),
('D4', false, false, true, NULL, false),
('D5', false, false, true, NULL, false),
('D6', false, false, true, NULL, false),
('D7', false, false, true, NULL, false),
('D8', false, false, true, NULL, false),
('D9', false, false, true, NULL, false),
('D10', false, false, true, NULL, false),
('D11', true, false, false, NULL, false),
('D12', true, false, false, NULL, false),
('D13', true, false, false, NULL, false),
('D14', true, false, false, NULL, false),
('D15', true, false, false, NULL, false),
('D16', true, false, false, NULL, false),
('D17', true, false, false, NULL, false),
('D18', true, false, false, NULL, false),
('D19', true, false, false, NULL, false),
('D20', true, false, false, NULL, false),
('D21', false, false, true, NULL, false),
('D22', false, false, true, NULL, false),
('D23', false, false, true, NULL, false),
('D24', false, false, true, NULL, false),
('D25', false, false, true, NULL, false),
('D26', false, false, true, NULL, false),
('D27', false, false, true, NULL, false),
('D28', false, false, true, NULL, false),
('D29', false, false, true, NULL, false),
('D30', false, false, true, NULL, false),
('D31', true, false, false, NULL, false),
('D32', true, false, false, NULL, false),
('D33', true, false, false, NULL, false),
('D34', true, false, false, NULL, false),
('D35', true, false, false, NULL, false),
('D36', true, false, false, NULL, false),
('D37', true, false, false, NULL, false),
('D38', true, false, false, NULL, false),
('D39', true, false, false, NULL, false),
('D40', true, false, false, NULL, false),
('D41', false, false, false, NULL, false),
('D42', false, false, false, NULL, false),
('D43', false, false, false, NULL, false),
('D44', false, false, false, NULL, false),
('D45', false, false, false, NULL, false),
('D46', false, false, false, NULL, false),
('D47', false, false, false, NULL, false),
('D48', false, false, false, NULL, false),
('D49', false, false, false, NULL, false),
('D50', false, false, false, NULL, false),
('D51', true, false, false, NULL, false),
('D52', true, false, false, NULL, false),
('D53', true, false, false, NULL, false),
('D54', true, false, false, NULL, false),
('D55', true, false, false, NULL, false),
('D56', true, false, false, NULL, false),
('D57', true, false, false, NULL, false),
('D58', true, false, false, NULL, false),
('D59', true, false, false, NULL, false),
('D60', true, false, false, NULL, false),
('D61', false, false, false, NULL, false),
('D62', false, false, false, NULL, false),
('D63', false, false, false, NULL, false),
('D64', false, false, false, NULL, false),
('D65', false, false, false, NULL, false),
('D66', false, false, false, NULL, false),
('D67', true, false, false, NULL, false),
('D68', true, false, false, NULL, false),
('D69', true, false, false, NULL, false),
('D70', true, false, false, NULL, false),
('D71', true, false, false, NULL, false),
('D72', true, false, false, NULL, false),
('D73', true, false, false, NULL, false),
('D74', true, false, false, NULL, false),
('D75', true, false, false, NULL, false),
('D76', true, false, false, NULL, false),
('D77', true, false, false, NULL, false),
('D78', true, false, false, NULL, false),
('D79', true, false, false, NULL, false),
('D80', true, false, false, NULL, false),
('D81', true, false, false, NULL, false),
('D82', true, false, false, NULL, false),
('D83', true, false, false, NULL, false),
('D84', true, false, false, NULL, false),
('D85', true, false, false, NULL, false),
('D86', true, false, false, NULL, false),
('D87', true, false, false, NULL, false),
('D88', true, false, false, NULL, false),
('D89', true, false, false, NULL, false),
('D90', true, false, false, NULL, false),
('D91', true, false, false, NULL, false),
('D92', true, false, false, NULL, false),
('D93', true, false, false, NULL, false),
('D94', true, false, false, NULL, false),
('D95', true, false, false, NULL, false),
('D96', true, false, false, NULL, false),
('D97', true, false, false, NULL, false),
('D98', true, false, false, NULL, false),
('D99', true, false, false, NULL, false),
('D100', true, false, false, NULL, false)

-- DELETE FROM seats WHERE id = 'A1';
-- DELETE FROM seats WHERE id = 'A2';
-- DELETE FROM seats WHERE id = 'A3';
-- DELETE FROM seats WHERE id = 'A4';
-- DELETE FROM seats WHERE id = 'A6';
-- DELETE FROM seats WHERE id = 'A7';
-- DELETE FROM seats WHERE id = 'A8';
-- DELETE FROM seats WHERE id = 'A9';
-- DELETE FROM seats WHERE id = 'A10';
-- DELETE FROM seats WHERE id = 'A11';
-- DELETE FROM seats WHERE id = 'A12';
-- DELETE FROM seats WHERE id = 'A13';
-- DELETE FROM seats WHERE id = 'A19';
-- DELETE FROM seats WHERE id = 'A20';
-- DELETE FROM seats WHERE id = 'A22';
-- DELETE FROM seats WHERE id = 'A23';
-- DELETE FROM seats WHERE id = 'A24';
-- DELETE FROM seats WHERE id = 'A25';
-- DELETE FROM seats WHERE id = 'A26';
-- DELETE FROM seats WHERE id = 'A27';
-- DELETE FROM seats WHERE id = 'A28';

-- DELETE FROM seats WHERE id = 'B51';
-- DELETE FROM seats WHERE id = 'B52';
-- DELETE FROM seats WHERE id = 'B53';
-- DELETE FROM seats WHERE id = 'B54';
-- DELETE FROM seats WHERE id = 'B55';
-- DELETE FROM seats WHERE id = 'B56';
-- DELETE FROM seats WHERE id = 'B57';
-- DELETE FROM seats WHERE id = 'B58';
-- DELETE FROM seats WHERE id = 'B59';
-- DELETE FROM seats WHERE id = 'B60';
-- DELETE FROM seats WHERE id = 'B71';
-- DELETE FROM seats WHERE id = 'B72';
-- DELETE FROM seats WHERE id = 'B76';
-- DELETE FROM seats WHERE id = 'B77';
-- DELETE FROM seats WHERE id = 'B78';
-- DELETE FROM seats WHERE id = 'B79';
-- DELETE FROM seats WHERE id = 'B80';

-- DELETE FROM seats WHERE id = 'D41';
-- DELETE FROM seats WHERE id = 'D42';
-- DELETE FROM seats WHERE id = 'D43';
-- DELETE FROM seats WHERE id = 'D44';
-- DELETE FROM seats WHERE id = 'D45';
-- DELETE FROM seats WHERE id = 'D46';
-- DELETE FROM seats WHERE id = 'D47';
-- DELETE FROM seats WHERE id = 'D48';
-- DELETE FROM seats WHERE id = 'D49';
-- DELETE FROM seats WHERE id = 'D50';
-- DELETE FROM seats WHERE id = 'D61';
-- DELETE FROM seats WHERE id = 'D62';
-- DELETE FROM seats WHERE id = 'D63';
-- DELETE FROM seats WHERE id = 'D64';
-- DELETE FROM seats WHERE id = 'D65';
-- DELETE FROM seats WHERE id = 'D66';

-- DROP TABLE seats;

-- TRUNCATE TABLE users;
-- CREATE TABLE users (
--     id SMALLINT PRIMARY KEY,
--     username VARCHAR(50) NOT NULL,
--     email VARCHAR(50) NOT NULL,
--     owned_seat VARCHAR(30) NOT NULL,
--     amount INTEGER NOT NULL
-- );

-- ALTER TABLE users
-- ADD email VARCHAR(50) NOT NULL;

-- DROP TABLE users;

-- -- TRUNCATE TABLE users;

-- -- UPDATE seats
-- -- SET isAvailable = TRUE
-- -- WHERE id = 'C83';