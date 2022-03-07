<?php include('server.php'); ?>
<!DOCTYPE html>
<html>
    <head>
        <title>LogIn</title>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    
    <body>
        
        <div class="header">
            
            <h1>Login</h1>
        </div>
        
        <form action="login.php" method="post">
            
            <?php include('errors.php'); ?>
            
            <div class="input-group">
                <label>Username</label>
                <input type="text" name="username">
            </div>
            
            <div class="input-group">
                <label>Password</label>
                <input type="password" name="password_1">
            </div>
            
            
            <div class="input-group">
                
                <button type="submit" name="login" class="btn">Login</button>
                
            </div>
            <p>
                Not yet a member? <a href="register.php">Sign Up</a>
            </p>
        
        </form>
        
    </body>
</html>